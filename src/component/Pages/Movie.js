import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Videotitle from "../videoTitle/Videotitle";
import imageFilm from "../../assets/images/lucifer.jpeg";
import getPopularMovie from "../../hooks/getPopularMovie";
import Carousel from "./gallery.js"
import {handleDragStart, items} from "./gallery.js"


export default class Movie extends React.Component {
    componentDidMount() {
        this.fetchMovies();
    }

    state = {
      isLoading: true,
      movies: [],
      tab_len: 0,
      errors : null
    }

    
    render() {
        this.modifyCarousel(items)  
        const { isLoading, movies, tab_len} = this.state;
        return (

            <React.Fragment>  
                <Carousel />
            </React.Fragment>
        )

    }

    fetchMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular` , {
            methods: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
                "Content-Type": "application/json;charset=utf-8"
            }}).then(res => res.json())
            .then(res => {
                // console.log(res);
                this.setState({
                    movies: res.results,
                    tab_len: res.results.length,
                    isLoading: false
                })
            }).catch(error => {
                this.setState({
                    error, 
                    isLoading: false
                })
            })
    }

    modifyCarousel(items) {
        const { movies, tab_len, isLoading } = this.state;
        if (!isLoading) {
            for (let i = 0; i < tab_len; i++) {
                const movie = movies[i];
                console.log(movie);
                const movie_title = movie['original_title']
                const movie_image = `https://image.tmdb.org/t/p/w500/` + movie['backdrop_path']
                const movie_grade = movie['vote_average']
                items.push(
                    <Videotitle
                        onDragStart={handleDragStart} 
                        src= {movie_image}
                        alt= "Film Informations"
                        filmTitle= {movie_title}
                        filmStyle= "Action"
                        filmGrade= {movie_grade}
                        onTen= "/10"
                        />
                )
            }
        }
    }
}