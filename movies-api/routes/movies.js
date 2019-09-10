const express = require('express');
//importando nuestros servicios
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router);

    //instanciando un nuevo servicio
    const moviesService = new MoviesService();

    //Obteniendo toda la lista de películas
    router.get("/", async function (req, res, next){
        //los tags vienen del query de la url
        const { tags } = req.query;
        try{
            //filtramos las peliculas que queremos ver por unos tags
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        }catch(err){
            next(err);
        }
    });
    //Obteniendo una pelicula en particular
    router.get("/:movieId", async function (req, res, next){
        //en este caso el id viene como parámetro en la URL
        const { movieId } = req.params;
        try{
            const movies = await moviesService.getMovie( { movieId });

            res.status(200).json({
                data: movies,
                message: 'movie retrieved'
            })
        }catch(err){
            next(err);
        }
    });
    //Creando las películas
    router.post("/", async function (req, res, next){
        //sacamos del cuerpo (body) de la petición la película.
        const { body : movie } = req;
        try{
            const createdMovieId = await moviesService.createMovie( { movie});

            res.status(201).json({
                data: createdMovieId,
                message: 'movies created'
            })
        }catch(err){
            next(err);
        }
    });
    //Actualizando una película
    router.put("/:movieId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de movie a actualizar)
        const { body : movie } = req;
        const { movieId } = req.params;

        try{
            const updatedMovieId = await moviesService.udpateMovie({ movieId , movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        }catch(err){
            next(err);
        }
    });
    //Eliminar pelicula
    router.delete("/:movieId", async function (req, res, next){
        const { movieId } = req.params;
        try{
            const deletedMovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        }catch(err){
            next(err);
        }
    });
}

module.exports = moviesApi;