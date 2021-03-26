import React from 'react';
import CastingImg from "../../assets/images/castingImg.jpeg"
import "./Casting.css"

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
      if (!isLoading) {
          console.log(this.state.movieDetails);
          return this.RenderImg()
      } else {
        return <p>Wait, I'm Loading !</p>;  
      }
  
    }

    RenderImg() {
        return this.state.movieDetails.cast.map((item, index) => 
        {
            if (index < 5) {
                console.log(item);
                return (
                    <React.Fragment>
                        <div className="castingContainer">
                        <img className="castingImg" src={"https://image.tmdb.org/t/p/original/" + item.profile_path} ></img>
                        <span className="actorName">{item.name.split(' ')[0]}</span>
                        <span className="foreName">{item.name.split(' ')[1]}</span>
                        </div>
                    </React.Fragment>
                )
            }
        })
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
            isLoading: false
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