import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import List from './components/List';

const BASE_URL =
	'https://api.themoviedb.org/3/discover/movie?api_key=5ef9d0416f5fd89e348700a28c4fddf6&sort_by=popularity.desc';
const API_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=5ef9d0416f5fd89e348700a28c4fddf6&query=';
const API_KEY = 'api_key=5ef9d0416f5fd89e348700a28c4fddf6';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [filterMovies, setFilterMovie] = useState([]);
	const [genre, setGenre] = useState();
	const [rating, setRating] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');

	//This useEffect is for fetching data. Certain parameters reruire conditional data fetching (such as looking for all genres)
	useEffect(() => {
		console.log(genre);
		if (genre === 100) {
			setGenre([
				28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878,
				10770, 53, 10752, 37,
			]);
		}
		if (searchQuery === '') {
			try {
				fetch(BASE_URL)
					.then((res) => res.json())
					.then((data) => {
						if (Array.isArray(genre)) {
							setFilterMovie(
								data.results.filter(
									(movie) =>
										movie.vote_average >= rating &&
										movie.genre_ids.includes(genre.find(() => movie.genre_ids))
								)
							);
						} else
							setFilterMovie(
								data.results.filter(
									(movie) =>
										movie.vote_average >= rating &&
										movie.genre_ids.includes(genre)
								)
							);
					});
			} catch (e) {
				console.log(e);
			}
		} else {
			try {
				fetch(API_URL + searchQuery)
					.then((res) => res.json())
					.then((data) => {
						setMovies(data.results);
						if (movies === undefined) {
							return;
						} else if (Array.isArray(genre)) {
							setFilterMovie(
								data.results.filter(
									(movie) =>
										movie.vote_average >= rating &&
										movie.genre_ids.includes(genre.find(() => movie.genre_ids))
								)
							);
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
