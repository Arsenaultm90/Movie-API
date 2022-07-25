import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieBox from './components/MovieBox/MovieBox';
import Navbar from './components/Navbar/Navbar';
import List from './components/List';

const API_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=5ef9d0416f5fd89e348700a28c4fddf6&query=Spider';
const API_KEY = 'api_key=5ef9d0416f5fd89e348700a28c4fddf6';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [filterMovies, setFilterMovie] = useState([]);

	useEffect(() => {
		try {
			fetch(API_URL)
				.then((res) => res.json())
				.then((data) => {
					setMovies(data.results);
				});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<div className='app'>
			<Navbar />
			<List movies={movies} />
		</div>
	);
};

export default App;
