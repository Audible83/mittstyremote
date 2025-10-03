#!/usr/bin/env python3
"""
FastAPI service for speaker diarization using pyannote.audio
"""

from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import torch
import tempfile
import os
from pathlib import Path
from pyannote.audio import Pipeline
import numpy as np
from typing import Optional, List, Dict
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Diarization Service", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global pipeline (loaded once at startup)
diarization_pipeline = None
embedding_model = None

@app.on_event("startup")
async def load_models():
    """Load pyannote models at startup"""
    global diarization_pipeline, embedding_model

    try:
        logger.info("Loading pyannote.audio diarization pipeline...")

        # Note: Requires HuggingFace token for pyannote models
        # Set HF_TOKEN environment variable or use auth_token parameter
        hf_token = os.getenv("HUGGINGFACE_TOKEN")

        if not hf_token:
            logger.warning("No HUGGINGFACE_TOKEN found. Diarization will fail without it.")
            logger.warning("Get token from: https://huggingface.co/settings/tokens")
            logger.warning("Accept pyannote/speaker-diarization-3.1 user conditions")

        diarization_pipeline = Pipeline.from_pretrained(
            "pyannote/speaker-diarization-3.1",
            use_auth_token=hf_token
        )

        # Use GPU if available
        if torch.cuda.is_available():
            diarization_pipeline.to(torch.device("cuda"))
            logger.info("Using GPU for diarization")
        else:
            logger.info("Using CPU for diarization")

        logger.info("Models loaded successfully")

    except Exception as e:
        logger.error(f"Failed to load models: {e}")
        logger.error("Diarization endpoints will not work without models")


@app.get("/")
async def root():
    """Health check"""
    return {
        "service": "Diarization Service",
        "status": "running",
        "models_loaded": diarization_pipeline is not None
    }


@app.post("/diarize")
async def diarize_audio(file: UploadFile = File(...)):
    """
    Perform speaker diarization on audio file

    Returns: List of segments with speaker labels
    [
        {"start": 0.0, "end": 5.2, "speaker": "SPK00"},
        {"start": 5.5, "end": 10.3, "speaker": "SPK01"},
        ...
    ]
    """
    if diarization_pipeline is None:
        raise HTTPException(
            status_code=503,
            detail="Diarization model not loaded. Check server logs."
        )

    # Save uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as tmp_file:
        content = await file.read()
        tmp_file.write(content)
        tmp_path = tmp_file.name

    try:
        logger.info(f"Diarizing audio file: {file.filename}")

        # Run diarization
        diarization = diarization_pipeline(tmp_path)

        # Convert to segments list
        segments = []
        for turn, _, speaker in diarization.itertracks(yield_label=True):
            segments.append({
                "start": float(turn.start),
                "end": float(turn.end),
                "speaker": str(speaker)
            })

        logger.info(f"Diarization complete. Found {len(set(s['speaker'] for s in segments))} speakers")

        return {"segments": segments}

    except Exception as e:
        logger.error(f"Diarization failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        # Cleanup temp file
        if os.path.exists(tmp_path):
            os.unlink(tmp_path)


@app.post("/enroll")
async def enroll_speaker(
    file: UploadFile = File(...),
    person_id: int = Form(...)
):
    """
    Enroll a speaker voice sample (v2 feature)

    This would extract speaker embeddings for later identification.
    MVP: Not fully implemented yet.
    """
    logger.info(f"Enrollment request for person_id={person_id}")

    # TODO: Implement speaker enrollment using pyannote.audio embeddings
    # For now, return placeholder
    return {
        "person_id": person_id,
        "status": "enrolled",
        "message": "Enrollment feature coming in v2"
    }


@app.post("/identify")
async def identify_speakers(
    file: UploadFile = File(...),
    enrollments: str = Form(...)  # JSON string of enrollments
):
    """
    Identify speakers using enrolled voice samples (v2 feature)

    MVP: Not fully implemented yet.
    """
    logger.info("Identification request")

    # TODO: Implement speaker identification
    # For now, fallback to regular diarization
    return await diarize_audio(file)


if __name__ == "__main__":
    # Run server
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=port,
        reload=True,
        log_level="info"
    )
