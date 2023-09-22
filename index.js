const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
    res.send('status:200, message:"ok"')
  })
  app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    res.status(200).json({ status: 200, message: formattedTime });
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})