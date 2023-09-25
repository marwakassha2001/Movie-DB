const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello/:id?', (req, res) => {
  res.send(`status:200, message:"hello, ${req.params.id}"`)
})
app.get('/test', (req, res) => {
    res.send('status:200, message:"ok"')
  })
  app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    // res.status(200).json({ status: 200, message: formattedTime });
    res.send(`status:200, message:${formattedTime}`)
  });

  app.get('/search/', (req, res) => {
    if(req.query.search){
    res.send(`status:200,message:"ok",data=${req.query.search}`)
    }
    res.status(500).send(`status:500,error:true,message:"you have to provide a search"`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const moviesRouter =require("./routes/movies");
app.use("/movies",moviesRouter);