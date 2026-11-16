# STEP 1 ASSET PACK BUILDER
# Run from Windows PowerShell 5.1+ inside the repository clone.
# This copies only existing image/video/brand assets; no fonts, secrets or .env files.
# It does NOT download, generate, alter or approve third-party logos or project photos.

$ErrorActionPreference = 'Stop'
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$OutDir = Join-Path $RepoRoot 'CLICK_IX_one_shot_assets'
$ZipPath = Join-Path $RepoRoot 'CLICK_IX_one_shot_assets.zip'
New-Item -Path $OutDir -ItemType Directory -Force | Out-Null

$SourceFiles = @(
    'public\brand\click-ix-horizontal-black.png',
    'public\brand\click-ix-horizontal-white.png',
    'public\brand\click-ix-mark-yellow.png',
    'public\brand\apac\apac-award.png',
    'public\brand\cityscreen\cs-play-light.svg',
    'public\brand\cityscreen\cs-play-dark.svg',
    'public\brand\cityscreen\cs-play-color.svg',
    'public\brand\cityscreen\cs-play-chip.svg',
    'public\brand\cityscreen\cs-deals-light.svg',
    'public\brand\cityscreen\cs-deals-dark.svg',
    'public\brand\cityscreen\cs-signhub-light.svg',
    'public\brand\cityscreen\cs-context-light.svg',
    'public\brand\cityscreen\cs-edgeinsights-light.svg',
    'public\brand\clients\maxis.png',
    'public\brand\clients\triumph.png',
    'public\brand\clients\pantai.png',
    'public\media\hero.mp4',
    'public\media\hero-poster.jpg',
    'public\media\maxis-store.jpg',
    'public\media\maxis-screen.jpg',
    'public\media\cheras-mall.jpg',
    'public\media\building-led.jpg',
    'public\media\outdoor-street.jpg',
    'public\media\outdoor-network.png',
    'public\media\kpj2-lobby.jpg',
    'public\media\seam\maxis.jpg',
    'public\media\seam\cheras.jpg',
    'public\media\seam\cubig.jpg',
    'public\media\seam\kpj2.jpg'
)

$Copied = 0
$Missing = @()
foreach ($Relative in $SourceFiles) {
    $Source = Join-Path $RepoRoot $Relative
    if (-not (Test-Path -LiteralPath $Source -PathType Leaf)) {
        $Missing += $Relative
        continue
    }
    $Destination = Join-Path $OutDir $Relative
    $Parent = Split-Path -Path $Destination -Parent
    New-Item -Path $Parent -ItemType Directory -Force | Out-Null
    Copy-Item -LiteralPath $Source -Destination $Destination -Force
    $Copied++
}

$Readme = @'
CLICK IX REFERENCE-BOARD ASSET PACK
Source: the local repository at pakyad/click-ix-redesign.
This is a curated copy of EXISTING visual files only. It contains no fonts, credentials or secrets.

IMPORTANT:
- All CLICK IX and CityScreen marks must be used unchanged.
- Client logos and deployment photos require publication/advertiser approvals.
- The hero film/poster is the MotoGP KL26 project; do not relabel it as Pavilion KLFW.
- This pack does not contain a verified real CS Play scheduling/reporting screenshot.
- This pack does not include the chat-attached reference-board image: supply it separately.
- Additional project photographs must not be invented.
- Inspect 02_ASSET_MANIFEST.csv for the full verified inventory and outstanding gaps.
'@
Set-Content -Path (Join-Path $OutDir 'README_ASSETS.txt') -Value $Readme -Encoding UTF8

if (Test-Path -LiteralPath $ZipPath) { Remove-Item -LiteralPath $ZipPath -Force }
Compress-Archive -Path (Join-Path $OutDir '*') -DestinationPath $ZipPath -CompressionLevel Optimal

Write-Host "Existing files copied: $Copied"
Write-Host "Asset folder: $OutDir"
Write-Host "ZIP created: $ZipPath"
if ($Missing.Count -gt 0) {
    Write-Warning "Missing files:"
    $Missing | ForEach-Object { Write-Warning $_ }
}
