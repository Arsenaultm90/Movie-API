import React from 'react';
import MovieBox from './MovieBox/MovieBox';
import './List.scss';

const List = ({ movies }) => {
	if (movies === undefined) {
		return;
	} else {
		return (
			<section className='list'>
				<div className='movie-container'>
					{movies.map((movieData) => (
						<MovieBox key={movieData.id} {...movieData} />
					))}
				</div>
			</section>
		);
	}
};

export default List;
