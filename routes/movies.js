const express = require ("express");
const { sort } = require("semver");
const router = express.Router();


const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

router
.get('/', (req ,res) =>{
    res.send('nothing')
})
.get('/get/', (req ,res) =>{
    res.send({ status: 200, data: movies});
})
.get('/get/by-date', (req ,res) =>{
    res.send({ status: 200, data:[...movies].sort((a, b) => a.year - b.year)});
})
.get('/get/by-rating', (req ,res) =>{
    res.send({ status: 200, data:[...movies].sort((a, b) => a.rating - b.rating)});
})
.get('/get/by-title', (req,res) =>{
    res.send({ status: 200, data:[...movies].sort((a, b) => a.title.localeCompare(b.title))})
})
.get('/add/', (req ,res) =>{
    res.send('create movies')
})
.get('/edit/', (req ,res) =>{
    res.send('update movies')
})
.get('/delete/', (req ,res) =>{
    res.send('delete movies')
})





module.exports = router;