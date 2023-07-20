const express = require('express');
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/index.html')
})


app.get(['/index1.js', '/index2.js', '/index3.js', '/index4.js', '/index5.js', '/index6.js'], (req, res) => {
  res.sendFile(path.resolve() + '/index1.js')
})

app.get(['/async.js'], (req, res) => {
  res.sendFile(path.resolve() + '/async.js')
})

app.get('/defer.js', (req, res) => {
  res.sendFile(path.resolve() + '/defer.js')
  // setTimeout(() => {

  // }, 8000)
})



app.listen(5000);