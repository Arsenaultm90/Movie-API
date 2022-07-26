import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieBox from './components/MovieBox/MovieBox';
import Navbar from './components/Navbar/Navbar';
import List from './components/List';

const API_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=5ef9d0416f5fd89e348700a28c4fddf6&query=';
const API_KEY = 'api_key=5ef9d0416f5fd89e348700a28c4fddf6';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [filterMovies, setFilterMovie] = useState([]);
	const [genre, setGenre] = useState(28);
	const [rating, setRating] = useState(5);
	const [searchQuery, setSearchQuery] = useState('spider');

	useEffect(() => {
		if (searchQuery === '') {
			return;
		} else {
			try {
				fetch(API_URL + searchQuery)
					.then((res) => res.json())
					.then((data) => {
						setMovies(data.results);
						if (movies === undefined) {
							return;
						} else {
							setFilterMovie(
								movies.filter(
									(movie) =>
										movie.vote_average >= rating &&
										movie.genre_ids.includes(genre)
								)
							);
						}
					});
			} catch (e) {
				console.log(e);
			}
		}
	}, [genre, rating, searchQuery]);

	return (
		<div className='app'>
			<Navbar
				genre={genre}
				setGenre={setGenre}
				rating={rating}
				setRating={setRating}
				setSearchQuery={setSearchQuery}
				searchQuery={searchQuery}
			/>
			<List movies={filterMovies} />
		</div>
	);
};

export default App;
