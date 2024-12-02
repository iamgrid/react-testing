import React, { useState } from "react";

interface TFavoriteNumberProps {
	min?: number;
	max?: number;
}

function FavoriteNumber({ min = 1, max = 9 }: TFavoriteNumberProps) {
	const [number, setNumber] = useState<number>(min);
	const [numberEntered, setNumberEntered] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumber(Number(event.target.value));
		setNumberEntered(true);
	};

	const isValid = !numberEntered || (number >= min && number <= max);

	return (
		<form>
			<label htmlFor="favorite-number">Favorite Number</label>
			<input
				id="favorite-number"
				type="number"
				value={number}
				onChange={handleChange}
				placeholder="Enter a number"
			/>
			{/* <img src="#" />{" "} */}
			{/* line above trips aXe (a11y.js) test with "images must have alternate text (image-alt)" */}
			{/* <input id="not-a-number" />{" "} */}
			{/* line above trips aXe test with "Form elements must have labels (label)" */}
			<div data-testid="lipsum">Lorem ipsum denem sit amet.</div>
			{!isValid ? (
				<div role="alert">
					The number must be between {min} and {max}
				</div>
			) : null}
		</form>
	);
}

export default FavoriteNumber;
