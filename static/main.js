function gamer() {
    const quality = document.getElementById('quality')
    const filename = document.getElementById('filename')
    const format = document.getElementById('format')
    const downloadBtn = document.getElementById('download')

    downloadBtn.innerText = "Downloading file..."

    var url = $("#url").text()
    var message = {
        'url': url,
        'quality': quality.value,
        'filename': filename.value,
        'format': format.value
    }
    
}