const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

app.get("/download", (req, res) => {
  const filename = req.query.filename
  const url = req.query.url
  const format= req.query.format
  const quality = req.query.quality
  
  if ((filename === 'string' && url === 'string' && format === 'string' && quality === 'string')) {
    res.header('Content-Disposition', `attachment; filename="${filename}.${format}"`);
    ytdl(url, {'format': format, 'quality': quality}).pipe(res);
  } else {
    res.send('Please input proper values in all fields.')
  }

});


app.use(express.static(path.join(__dirname, 'static')))

app.listen(PORT, function() {
  console.log("Hosted on port " + PORT)
})