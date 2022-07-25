import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './navbar.scss';

const Navbar = () => {
	const genres = [
		{ value: 28, label: 'Action' },
		{ value: 12, label: 'Adventure' },
		{ value: 16, label: 'Animation' },
		{ value: 35, label: 'Comedy' },
		{ value: 80, label: 'Crime' },
		{ value: 99, label: 'Documentary' },
		{ value: 18, label: 'Drama' },
		{ value: 10751, label: 'Family' },
		{ value: 14, label: 'Fantasy' },
		{ value: 36, label: 'History' },
		{ value: 27, label: 'Horror' },
		{ value: 10402, label: 'Music' },
		{ value: 9648, label: 'Mystery' },
		{ value: 10749, label: 'Romance' },
		{ value: 878, label: 'Science Fiction' },
		{ value: 10770, label: 'TV Movie' },
		{ value: 53, label: 'Thriller' },
		{ value: 10752, label: 'War' },
		{ value: 37, label: 'Western' },
	];

	const ratings = [
		{ value: 5, label: '5+' },
		{ value: 6, label: '6+' },
		{ value: 7, label: '7+' },
		{ value: 8, label: '8+' },
		{ value: 9, label: '9+' },
		{ value: 10, label: '10+' },
	];

	const [genre, setGenre] = useState(28);
	const [rating, setRating] = useState(5);

	const handleChange = (event) => {
		if (event.target.value > 10) {
			setGenre(event.target.value);
		} else {
			setRating(event.target.value);
		}
	};

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<Dropdown
					label='Genre: '
					options={genres}
					value={genre}
					onChange={handleChange}
				/>
				<Dropdown
					label='Rating: '
					options={ratings}
					value={rating}
					onChange={handleChange}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
