# Setup Global Antigravity Configuration
# This script copies the universal rules and skills to ~/.gemini/config so they apply to all projects!

$GlobalConfigDir = "$env:USERPROFILE\.gemini\config"
$GlobalRulesDir = "$GlobalConfigDir\rules"
$GlobalSkillsDir = "$GlobalConfigDir\skills"

Write-Host "Setting up Global Antigravity Config at: $GlobalConfigDir" -ForegroundColor Cyan

# Create directories if they don't exist
if (!(Test-Path $GlobalRulesDir)) {
    New-Item -ItemType Directory -Path $GlobalRulesDir -Force | Out-Null
    Write-Host "Created global rules directory: $GlobalRulesDir" -ForegroundColor Green
}
if (!(Test-Path $GlobalSkillsDir)) {
    New-Item -ItemType Directory -Path $GlobalSkillsDir -Force | Out-Null
    Write-Host "Created global skills directory: $GlobalSkillsDir" -ForegroundColor Green
}

# Source directories
$SourceRulesDir = "$PSScriptRoot\.agents\rules"
$SourceSkillsDir = "$PSScriptRoot\.agents\skills"

# Copy Rules
if (Test-Path $SourceRulesDir) {
    Copy-Item -Path "$SourceRulesDir\*" -Destination $GlobalRulesDir -Recurse -Force
    Write-Host "Successfully synced universal rules to: $GlobalRulesDir" -ForegroundColor Green
}

# Copy Skills
if (Test-Path $SourceSkillsDir) {
    Copy-Item -Path "$SourceSkillsDir\*" -Destination $GlobalSkillsDir -Recurse -Force
    Write-Host "Successfully synced universal skills to: $GlobalSkillsDir" -ForegroundColor Green
}

# Copy Root AGENTS.md as global rule if needed
if (Test-Path "$PSScriptRoot\AGENTS.md") {
    Copy-Item -Path "$PSScriptRoot\AGENTS.md" -Destination "$GlobalConfigDir\AGENTS.md" -Force
    Write-Host "Successfully synced global AGENTS.md" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Antigravity Global Setup Complete! Token-saving & quality rules are now active across ALL projects." -ForegroundColor Yellow
