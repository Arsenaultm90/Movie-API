import React from 'react';
import './movieBox.scss';

const API_IMG = 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({
	title,
	poster_path,
	vote_average,
	release_date,
	overview,
}) => {
	return (
		<div className='movieBox'>
			<div className='movie-container'>
				<img src={API_IMG + poster_path} alt='' />
				<h4>{title}</h4>
				<p>{vote_average}</p>
			</div>
		</div>
	);
};

export default MovieBox;
