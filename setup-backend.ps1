# Print a starting message
Write-Host "Creating backend directory structure for The Faithful..." -ForegroundColor Green

# Create main backend directory and navigate into it
New-Item -ItemType Directory -Force -Path "backend" | Out-Null
Set-Location -Path "backend"

# Create directories and their files
$structure = @{
    "config" = @("db.js")
    "models" = @("User.js", "Parish.js", "Event.js")
    "routes" = @("auth.js", "parishes.js", "events.js")
    "middleware" = @("auth.js")
}

# Create each directory and its files
foreach ($dir in $structure.Keys) {
    # Create directory
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    Write-Host "Created directory: $dir" -ForegroundColor Cyan
    
    # Create files in that directory
    foreach ($file in $structure[$dir]) {
        $filePath = Join-Path -Path $dir -ChildPath $file
        New-Item -ItemType File -Force -Path $filePath | Out-Null
        Write-Host "Created file: $filePath" -ForegroundColor Yellow
    }
}

# Create root level files
New-Item -ItemType File -Force -Path "server.js" | Out-Null
New-Item -ItemType File -Force -Path ".env" | Out-Null
Write-Host "Created root level files: server.js, .env" -ForegroundColor Yellow

# Initialize npm and install dependencies
Write-Host "Initializing npm and installing dependencies..." -ForegroundColor Green
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon

# Return to project root
Set-Location ..

Write-Host "Backend directory structure created successfully!" -ForegroundColor Green
Write-Host "You can now start adding content to your files." -ForegroundColor Green

# Keep the window open
Read-Host -Prompt "Press Enter to exit"