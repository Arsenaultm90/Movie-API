import React from 'react';
import './movieBox.scss';

const API_IMG = 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({ title, poster_path, vote_average, overview }) => {
	return (
		<div className='movieBox'>
			<div className='movie-container'>
				<img src={API_IMG + poster_path} alt='' />
			</div>
		</div>
	);
};

export default MovieBox;
