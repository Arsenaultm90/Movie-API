import './Dropdown.scss';

const Dropdown = ({ label, value, options, onChange }) => {
	return (
		<div className='dropdown'>
			<label>
				{label}
				<select value={value} onChange={onChange}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

export default Dropdown;
