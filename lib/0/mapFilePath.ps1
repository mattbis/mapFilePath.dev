# hmmm 
function Get-FileStats($path) {
  # Get the stats of all the files in the directory.
  $stats = Get-ChildItem $path -Recurse | Get-FileInfo

  # Convert the stats to JSON.
  $json = $stats | ConvertTo-Json

  # Return the JSON.
  Return $json
}
