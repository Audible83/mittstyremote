<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Add missing columns to meetings
        Schema::table('meetings', function (Blueprint $table) {
            $table->integer('upload_chunk_count')->default(0)->after('state');
            $table->text('error_message')->nullable()->after('decisions_content');
        });

        // Add indexes to meetings table
        Schema::table('meetings', function (Blueprint $table) {
            $table->index('company_name', 'idx_meetings_company_name');
            $table->index('company_orgnr', 'idx_meetings_company_orgnr');
            $table->index('meeting_datetime', 'idx_meetings_datetime');
            $table->index('retention_until', 'idx_meetings_retention');
            $table->index(['user_id', 'created_at'], 'idx_meetings_user_created');
            $table->index(['state', 'updated_at'], 'idx_meetings_state_updated');
            $table->index(['retention_until', 'state'], 'idx_meetings_retention_state');
        });

        // Add indexes to shares table
        Schema::table('shares', function (Blueprint $table) {
            $table->index('expires_at', 'idx_shares_expires');
            $table->index(['meeting_id', 'expires_at'], 'idx_shares_meeting_expires');
        });

        // Add indexes to audit_logs table
        Schema::table('audit_logs', function (Blueprint $table) {
            $table->index('action', 'idx_audit_action');
            $table->index('ip_address', 'idx_audit_ip');
        });
    }

    public function down(): void
    {
        Schema::table('meetings', function (Blueprint $table) {
            $table->dropColumn(['upload_chunk_count', 'error_message']);
            $table->dropIndex('idx_meetings_company_name');
            $table->dropIndex('idx_meetings_company_orgnr');
            $table->dropIndex('idx_meetings_datetime');
            $table->dropIndex('idx_meetings_retention');
            $table->dropIndex('idx_meetings_user_created');
            $table->dropIndex('idx_meetings_state_updated');
            $table->dropIndex('idx_meetings_retention_state');
        });

        Schema::table('shares', function (Blueprint $table) {
            $table->dropIndex('idx_shares_expires');
            $table->dropIndex('idx_shares_meeting_expires');
        });

        Schema::table('audit_logs', function (Blueprint $table) {
            $table->dropIndex('idx_audit_action');
            $table->dropIndex('idx_audit_ip');
        });
    }
};
