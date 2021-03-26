import React from "react";
// import Header from "../header/noheader";
import Filmdisplay from "../VideoDisplay/Filmdisplay";
import "./Film.css";
// import video1 from "../../assets/videos/banana.mp4";
export default class Film extends React.Component {
  state = {
    isLoading: true,
    propsId: this.props.match.params.id,
    imgPath: "",
    runtime: 0,
    voteAve: 0,
    releasedYear: 6666,
    overview: "",
    genres: "",
    urlSrc: "",
    movieId: 0
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { propsId } = this.state;
    return <React.Fragment>{this.modifyDisplay()}</React.Fragment>;
  }

  fetchMovies() {
    const { isLoading, propsId } = this.state;

    if (isLoading) {
      const apiName = "https://api.themoviedb.org/3/movie/" + propsId;
      const imgPath = "https://image.tmdb.org/t/p/original/";

      fetch(apiName, {
        methods: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const genresTab = res.genres[0];
          this.setState({
            title: res.original_title,
            imgPath: imgPath + res.backdrop_path,
            runtime: res.runtime,
            voteAve: res.vote_average,
            releasedYear: res.release_date.substring(0, 4),
            overview: res.overview,
            genres: genresTab.name,
            urlSrc: res.homepage,
            movieId: res.id
          });
        })
        .catch((error) => {
          // this.setState({
          // })
        });
    }
  }

  modifyDisplay() {
    const {
      title,
      imgPath,
      runtime,
      voteAve,
      releasedYear,
      overview,
      genres,
      urlSrc,
      movieId
    } = this.state;
    return (
      <Filmdisplay
        src={imgPath}
        title={title}
        runtime={runtime}
        voteAve={voteAve}
        releasedYear={releasedYear}
        overview={overview}
        genres={genres}
        urlSrc={urlSrc}
        movieId={movieId}
      />
    );
  }
}
