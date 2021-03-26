import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Videotitle from "../videoTitle/Videotitle";
import 'react-alice-carousel/lib/alice-carousel.css';


export default class Latest extends React.Component {
    state = {
      isLoading: true,
      movies: [],
      tab_len: 0,
      errors : null
    }
    
    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        const {isLoading} = this.state;
        const responsive = {
            0: { items: 1 },
            340: { items: 1},
            350: { items: 1.7 },
            420: { items: 1.9 },
            500: { items: 1.9 },
            700: { items: 3 },
            900: { items: 4 }, // number of items per resolution 
            1100: { items: 5 }, 
            1300: { items: 6 }, 
            1500: { items: 7 }, 
            1800: { items: 8 }, 
            2000: { items: 9 }, 
            2200: { items: 10 }, 
        };

        // const respObj = [];
        // const respItems = 1.7
        // const respKey = 350
        // const respLimite = 3000
        // const restStep = 50

        // for ( var i=0; i<(respLimite/restStep); i++ ) {
        //     const key3 = respKey + (i*((respLimite-respItems)/restStep))
        //     var obj = {};

        //     obj[key3] = "value3";
        //     respObj.push(obj);
        //     console.log(respObj);
        // }
       ; 
    // }
        const items = [];

        if (!isLoading) {
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

    fetchMovies() {
        const {isLoading} = this.state;

        if (isLoading) {
            fetch(`https://api.themoviedb.org/3/movie/upcoming` , {
                methods: "GET",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
                    "Content-Type": "application/json;charset=utf-8"
                }}).then(res => res.json())
                .then(res => {
                    this.setState({
                        movies: res.results,
                        tab_len: res.results.length,
                        isLoading: false
                    })
                }).catch(error => {
                    this.setState({
                        errors: error, 
                        isLoading: false
                    })
                })
        }
    }

    modifyCarousel(items) {
        const handleDragStart = (e) => e.preventDefault();
        const {movies, tab_len} = this.state;

        for (let i = 0; i < tab_len; i++) {
            const movie = movies[i];
            const movie_title = movie['original_title'];
            const movie_image = `https://image.tmdb.org/t/p/w500/` + movie['poster_path'];
            let movie_grade = movie['vote_average'];

            items.push(
                <Videotitle
                    onDragStart={handleDragStart} 
                    src= {movie_image}
                    alt= {movie_title}
                    filmTitle= {movie_title}
                    filmStyle= "Action" // Need to be modified
                    filmGrade= {movie_grade}
                    onTen= "/10"
                    />
            )
        }
    }
}