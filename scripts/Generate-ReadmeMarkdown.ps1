Set-StrictMode -Version 2.0

$statusFileName = [System.IO.Path]::Combine($PSScriptRoot, '..', 'command-status.csv')
$outputFileName = [System.IO.Path]::Combine($PSScriptRoot, '..', 'command-status.raw.md')

$commands = Import-Csv -Path $statusFileName
$legend = @"
:full_moon: - fully done

:waning_gibbous_moon:

:last_quarter_moon:

:waning_crescent_moon:

:new_moon: - not done

:poodle: - done in a "VS Code" specific way

:construction: - work in progress

:see_no_evil: - not applicable/not necessary

:no_entry: - not possible at this time
"@

function MapStatus($s) {
    switch ($s) {
        'done' { ':full_moon:' }
        'done(vs)' { ':waning_gibbous_moon:' }
        'done 75%' { ':full_moon:' }
        'done 50%' { ':last_quarter_moon:' }
        'done 25%' { ':waning_crescent_moon:' }
        'not done' { ':new_moon:' }
        'n/a' { ':see_no_evil:' }
        'wip' { ':construction:' }
        'no' { ':no_entry:' }
    }
}
function JoinCommand($cmd) {
    if ($cmd.Modifiers) {
        "$($cmd.Modifiers) + $($cmd.Command)"
    } else {
        $cmd.Command
    }
}

$widthCommand = ( $commands | ForEach-Object { JoinCommand $_ } | Measure-Object Length -Maximum ).Maximum
$widthStatus = ( $commands | ForEach-Object { (MapStatus $_.Status) } | Measure-Object Length -Maximum ).Maximum
$widthDesc = ( $commands | ForEach-Object { $_.Description } | Measure-Object Length -Maximum ).Maximum
$widthNotes = ( $commands | ForEach-Object { $_.Notes } | Measure-Object Length -Maximum ).Maximum

$header = @"
|$(' Command'.PadRight($widthCommand))|$(' Status'.PadRight($widthStatus))|$(' Description'.PadRight($widthDesc))|$(' Notes'.PadRight($widthNotes))|
|$('-' * $widthCommand)|$('-' * $widthStatus)|$('-' * $widthDesc)|$('-' * $widthNotes)|
"@

Clear-Content $outputFileName
"## Commands By Category" | Tee-Object $outputFileName -Append
$legend | Tee-Object $outputFileName -Append

$category = $null
foreach ($command in ($commands | Sort-Object -Property Category, Command, Modifiers, Description)) {
    if ($command.Category -ne $category) {
        $category = $command.Category
        "`n### $category" | Tee-Object $outputFileName -Append
        $header | Tee-Object $outputFileName -Append
    }
    "|$((JoinCommand $command).PadRight($widthCommand,' '))|$((MapStatus $command.Status).PadRight($widthStatus,' '))|$($command.Description.PadRight($widthDesc,' '))|$($command.Notes.PadRight($widthNotes,' '))|" | Tee-Object $outputFileName -Append
}

"`n## Commands By Key" | Tee-Object $outputFileName -Append
$legend | Tee-Object $outputFileName -Append
"" | Tee-Object $outputFileName -Append
$header | Tee-Object $outputFileName -Append
foreach ($command in ($commands | Sort-Object -Property Command, Modifiers, Description)) {
    "|$((JoinCommand $command).PadRight($widthCommand,' '))|$((MapStatus $command.Status).PadRight($widthStatus,' '))|$($command.Description.PadRight($widthDesc,' '))|$($command.Notes.PadRight($widthNotes,' '))|" | Tee-Object $outputFileName -Append
}
