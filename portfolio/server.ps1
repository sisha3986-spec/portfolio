$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host 'Server running at http://localhost:8080/'
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    $path = $req.Url.LocalPath
    if ($path -eq '/') { $path = '/index.html' }
    $localPath = Join-Path $PSScriptRoot $path.Substring(1)
    if (Test-Path $localPath) {
        $bytes = [System.IO.File]::ReadAllBytes($localPath)
        if ($localPath.EndsWith('.html')) { $res.ContentType = 'text/html; charset=utf-8' }
        elseif ($localPath.EndsWith('.css')) { $res.ContentType = 'text/css' }
        elseif ($localPath.EndsWith('.js')) { $res.ContentType = 'application/javascript' }
        elseif ($localPath.EndsWith('.jpg') -or $localPath.EndsWith('.jpeg')) { $res.ContentType = 'image/jpeg' }
        elseif ($localPath.EndsWith('.png')) { $res.ContentType = 'image/png' }
        elseif ($localPath.EndsWith('.mp4')) { $res.ContentType = 'video/mp4' }
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $res.StatusCode = 404
    }
    $res.OutputStream.Close()
}
