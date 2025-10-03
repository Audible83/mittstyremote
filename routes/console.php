<?php

use App\Jobs\CleanupDemoMeetingsJob;
use Illuminate\Support\Facades\Schedule;

Schedule::job(new CleanupDemoMeetingsJob)->hourly();
