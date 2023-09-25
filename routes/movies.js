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
// .get('/add/', (req ,res) =>{
//     res.send('create movies')
// })
.get('/edit/', (req ,res) =>{
    res.send('update movies')
})
.get('/delete/', (req ,res) =>{
    res.send('delete movies')
})
.get('/get/id/:id/', (req ,res) =>{
    let id = req.params.id;
    if(id > 0 && id <= movies.length){
        res.send({status: 200, data:movies[id]});   
    }else{
        res.send(`{status:404, error:true, message:'the movie ${id} does not exist'}`);
    }
      })

      .get('/add/:title/:year/:rating?', (req, res) => {
        const { title, year, rating } = req.params;
      
        if (!title || !year) {
          return res.status(403).json({ status: 403, error: true,
             message: 'You cannot create a movie without providing a title and a year',
          });
        }
      
        if (year.length !== 4) {
          return res.status(403).json({
            status: 403,
            error: true,
            message: 'Year must be a 4-digit number',
          });
        }
        const movieRating = rating || 4;
      
        const newMovie = {
          title,
          year: parseInt(year),
          rating: parseInt(movieRating),
        };
        movies.push(newMovie);
       res.send(movies);
      })


      .get('/delete/:id/', (req ,res) =>{
        let id = req.params.id;
        if(id > 0 && id <= movies.length){
            movies.splice(movies[id],1);
            res.send({status: 200, data:[movies]});   
        }else{
            res.send(`{status:404, error:true, message:'the movie <ID> does not exist'}`);
        }
          })





module.exports = router;