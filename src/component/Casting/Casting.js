import React from 'react';


export default class Casting extends React.Component {

    state = {
        propsId: this.props.movieId['movieId'],
        isLoading: true,
        cast: {},
        errors: null,
        movieDetails: {
        cast: []
      },
    };
  
  
  
    componentDidMount() {
      this.fetchCast();
    }
  
    render() {
      const { isLoading } = this.state;
      if (isLoading) {
          console.log(this.props.movieId);
          return this.state.movieDetails.cast.map((item) => {
              return <img className="castingImg" src={"https://image.tmdb.org/t/p/original/" + item.profile_path} ></img>
          })
        // return <p>I'm Okay</p>;
      } else {
        return <p>Wait, I'm Loading !</p>;  
      }
  
    }
    fetchCast() {
      const { isLoading, propsId, cast } = this.state;

      if (isLoading) {
        const apiName = 'https://api.themoviedb.org/3/movie/' + this.props.movieId + '/credits';
        const apiName2 = 'https://api.themoviedb.org/3/person/';
        fetch(apiName, {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c',
              'Content-Type': 'application/json;charset=utf-8',
          },
        }).then((res) => {
          return res.json();
        }).then((res) => {
          this.setState({
            movieDetails: res,
          });
          for (let i = 0; i < 5; i++) {
            fetch(apiName2 + res.cast[i]['id'], {
              method: 'GET',
              headers: {
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c',
                  'Content-Type': 'application/json;charset=utf-8',
              },
            }).then((res) => {
              return res.json();
            }).then((result) => {
              const actor = result;
              const casts = [...this.state.movieDetails.cast];
              casts.map((item, index) => {
                  if (item.id == actor.id) {
                      item.profile_path = actor.profile_path;
                  }
                });
                console.log(casts);
              this.setState({
                movieDetails: {
                  cast: casts
                },
              });
            });
          }
        })
        .catch((error) => {
          this.setState({
            errors: error,
            isLoading: false,
          });
        });
      }
    }
}