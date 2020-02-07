Set-StrictMode -Version 2.0

$statusFileName = [System.IO.Path]::Combine($PSScriptRoot, '..', 'command-status.csv')
$readmeFileName = [System.IO.Path]::Combine($PSScriptRoot, '..', 'README.md')

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
        default { $s }
    }
}
function MapAvailability($s) {
    switch ($s) {
        'x' { ':white_check_mark:' }
        '?' { ':grey_question:' }
        default { $s }
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
$widthAvailability = ":white_check_mark:".Length
$widthNotes = ( $commands | ForEach-Object { $_.Notes } | Measure-Object Length -Maximum ).Maximum

$header = @"
|$(' Command'.PadRight($widthCommand))|$(' Status'.PadRight($widthStatus))|$(' Description'.PadRight($widthDesc))|$(' Brief'.PadRight($widthAvailability))|$(' Codewright'.PadRight($widthAvailability))|$(' Personal'.PadRight($widthAvailability))|$(' Notes'.PadRight($widthNotes))|
|$('-' * $widthCommand)|$('-' * $widthStatus)|$('-' * $widthDesc)|$('-' * $widthAvailability)|$('-' * $widthAvailability)|$('-' * $widthAvailability)|$('-' * $widthNotes)|
"@

$content = @()
$content += "## Commands By Category"
$content += $legend

$category = $null
foreach ($command in ($commands | Sort-Object -Property Category, Command, Modifiers, Description)) {
    if ($command.Category -ne $category) {
        $category = $command.Category
        $content += "`n### $category"
        $content += $header
    }
    $content += "|$((JoinCommand $command).PadRight($widthCommand,' '))|$((MapStatus $command.Status).PadRight($widthStatus,' '))|$($command.Description.PadRight($widthDesc,' '))|$((MapAvailability $command.Brief).PadRight($widthAvailability,' '))|$((MapAvailability $command.Codewright).PadRight($widthAvailability,' '))|$((MapAvailability $command.Personal).PadRight($widthAvailability,' '))|$($command.Notes.PadRight($widthNotes,' '))|"
}

$content += "`n## Commands By Key"
$content += $legend
$content += ""
$content += $header
foreach ($command in ($commands | Sort-Object -Property Command, Modifiers, Description)) {
    $content += "|$((JoinCommand $command).PadRight($widthCommand,' '))|$((MapStatus $command.Status).PadRight($widthStatus,' '))|$($command.Description.PadRight($widthDesc,' '))|$((MapAvailability $command.Brief).PadRight($widthAvailability,' '))|$((MapAvailability $command.Codewright).PadRight($widthAvailability,' '))|$((MapAvailability $command.Personal).PadRight($widthAvailability,' '))|$($command.Notes.PadRight($widthNotes,' '))|"
}

#$content = ($content -join "`n")
#$content

$orig = Get-Content $readmeFileName
$start = $orig.IndexOf("## Commands By Category")
$end = $orig.IndexOf("## Known Issues")

if ($start -lt 0 -or $end -lt 0) {
    throw "Could not find range"
}

$results = $()
$results += $orig[0..($start - 1)]
$results += $content
$results += ""
$results += ""
$results += $orig[$end..($orig.Length - 1)]

$results | Set-Content $readmeFileName
