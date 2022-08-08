import { useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './navbar.scss';

const Navbar = ({
	genre,
	setGenre,
	rating,
	setRating,
	setSearchQuery,
	searchQuery,
}) => {
	const genres = [
		{
			value: 100,
			label: 'Any',
		},
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
		{ value: 1, label: '1+' },
		{ value: 2, label: '2+' },
		{ value: 3, label: '3+' },
		{ value: 4, label: '4+' },
		{ value: 5, label: '5+' },
		{ value: 6, label: '6+' },
		{ value: 7, label: '7+' },
		{ value: 8, label: '8+' },
		{ value: 9, label: '9+' },
		{ value: 10, label: '10+' },
	];

	useEffect(() => {
		setGenre(genres[0].value);
		setRating(ratings[0].value);
	}, []);

	const search = (e) => {
		setSearchQuery(e.currentTarget.value);
	};

	const handleChange = (event) => {
		if (event.target.value > 10) {
			setGenre(Number(event.target.value));
		} else {
			setRating(Number(event.target.value));
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
				<input type='text' placeholder='Search' onChange={search} />
			</div>
		</nav>
	);
};

export default Navbar;
