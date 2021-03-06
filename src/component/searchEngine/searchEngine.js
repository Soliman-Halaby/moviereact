import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Videotitle from "../videoTitle/Videotitle";



    
export default class SearchEngine extends React.Component {
    state = {
        isLoading: true,
        lastString: "",
        movies: [],
        tabLen: 0,
        errors: null
    }

    componentDidUpdate() {
        const {lastString} = this.state
        if(lastString != this.props.movieName && typeof this.props.movieName != undefined) {
            this.fetchSearch(this.props.movieName)
        }

    }
    
    
    render() {
        const {isLoading, lastString, movies} = this.state

        const responsive = {
            0: { items: 1 },
            500: { items: 2 },
            700: { items: 3 },
            900: { items: 4 }, // number of items per resolution 
            1100: { items: 5 }, 
            1300: { items: 6 }, 
            1500: { items: 7 }, 
            1800: { items: 8 }, 
            2000: { items: 9 }, 
            2200: { items: 10 }, 
        };
        const items = [];

        if (!isLoading && lastString == this.props.movieName) {
            this.modifyCarousel(items) 
            return (
                <React.Fragment>  
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            responsive={responsive}
                            disableButtonsControls ={true}
                            disableDotsControls = {true}
                        /> 
                </React.Fragment>
            )
        } else {
            return (
                <p>Wait, I'm Loading !</p>
            )
        }
    }

    fetchSearch(movieName) {
        if (typeof movieName != undefined && movieName != "") {
            fetch(`https://api.themoviedb.org/3/search/movie?&query=${movieName}` , {
            methods: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
                "Content-Type": "application/json;charset=utf-8"
            }})
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movies: res.results,
                    tabLen: res.results.length,
                    lastString: movieName,
                    isLoading: false
                })
            })
            .catch(error => {
                this.setState({
                    errors: error,
                    isLoading: false
                })
            })
        }
    }

    modifyCarousel(items) {
        const handleDragStart = (e) => e.preventDefault();
        const { movies } = this.state;

        for (let i = 0; i < 10; i++) {
          const movie = movies[i];
          const movie_title = movie["original_title"];
          const movie_image =
            `https://image.tmdb.org/t/p/original/` + movie["poster_path"];
          const movie_grade = movie["vote_average"];
          const movie_id = movie["id"];
          items.push(
            <Videotitle
              onDragStart={handleDragStart}
              src={movie_image}
              alt={movie_title}
              filmTitle={movie_title}
              filmStyle="Action" // Need to be modified
              filmGrade={movie_grade}
              onTen="/10"
              movieId={movie_id}
            />
          );
        }
    }
}