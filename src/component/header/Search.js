import React from 'react';
import "./Search.css";
import axios from 'axios';
import Videotitle from "../videoTitle/Videotitle";

class Search extends  React.Component {
	constructor( props ) {
        super( props );
        this.state = {
            query: '',
            results: {},
            error: '',
            message: '',
            loading: false,
            totalResults: 0,
            totalPages: 0,
            currentPageNo: 0,
        };
        this.cancel = '';
    }

    
    fetchSearchResults = ( updatedPageNo = '', query ) => {

        const items = [];
        const handleDragStart = (e) => e.preventDefault();
        console.log(`${query}`);
        const { movies } = `${query}`;

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

		// const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		// const searchUrl = `https://pixabay.com/api/?key=PASTE_YOUR_API_KEY_HERE&q=${query}${pageNumber}`;

		// if( this.cancel ) {
		// 	this.cancel.cancel();
		// }

		// this.cancel = axios.CancelToken.source();

		// axios.get( searchUrl, {
		// 	cancelToken: this.cancel.token
		// } )
		// 	.then( res => {
		// 		const total = res.data.total;
		// 		const totalPagesCount = this.getPageCount( total, 20 );
		// 		const resultNotFoundMsg = ! res.data.hits.length
		// 								? 'There are no more search results. Please try a new search'
		// 								: '';
		// 		this.setState( {
		// 			results: res.data.hits,
		// 			message: resultNotFoundMsg,
		// 			totalResults: total,
		// 			totalPages: totalPagesCount,
		// 			currentPageNo: updatedPageNo,
		// 			loading: false
		// 		} )
		// 	} )
		// 	.catch( error => {
		// 		if ( axios.isCancel(error) || error ) {
		// 			this.setState({
		// 				loading: false,
		// 				message: 'Failed to fetch the data. Please check network'
		// 			})
		// 		}
		// 	} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( 1, query );
			} );
		}
	};


    
	render() {
        const { query, loading, message, currentPageNo, totalPages } = this.state;
		
        return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
                <input
					type="text"
					name="query"
					value={ query }
					id="search-input"
					placeholder="Search..."
					onChange={this.handleOnInputChange}
                />
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}
export default Search;