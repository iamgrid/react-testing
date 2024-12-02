import React from "react";
import { render, screen, userEvent } from "../../../test-utils";
import FavoriteNumber from "../FavoriteNumber";

test("Entering an invalid number shows an error message.", async () => {
	const { rerender } = render(<FavoriteNumber />);
	const inputField = screen.getByLabelText(/favorite number/i);
	await userEvent.clear(inputField);
	await userEvent.type(inputField, "10");

	await screen.findByRole("alert");

	expect(screen.getByLabelText(/favorite number/i)).toHaveValue(10);

	expect(screen.getByRole("alert")).toHaveTextContent(
		/the number must be between .*/i
	);

	// rerender with the max prop set to 10
	rerender(<FavoriteNumber max={10} />);

	// use queryBy...().toBeNull() if you want an element to NOT be in the DOM
	expect(screen.queryByRole("alert")).toBeNull();
});
