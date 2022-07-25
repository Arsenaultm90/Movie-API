import React, { useEffect, useState } from 'react';
import MovieBox from './components/MovieBox/MovieBox';

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
					console.log(data.results);
					setMovies(data.results);
					setFilterMovie(movies.filter((rating) => rating.vote_average > 8.2));
				});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<div>
			{filterMovies.map((movieData) => (
				<MovieBox key={movieData.id} {...movieData} />
			))}
		</div>
	);
};

export default App;
