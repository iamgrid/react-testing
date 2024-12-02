import React from "react";
import { render, screen } from "../../../test-utils";
import FavoriteNumber from "../FavoriteNumber";

// toHaveAttribute() and toHaveTextContent() come from "@testing-library/jest-dom"

test("Renders a number input with label 'Favorite Number'.", () => {
	render(<FavoriteNumber />);
	const inputField = screen.getByLabelText(/favorite number/i);
	expect(inputField).toHaveAttribute("type", "number");
});

test("Renders a div with data-testid 'lipsum' with specified text content.", () => {
	render(<FavoriteNumber />);
	// screen.debug(); // Use screen.debug() to see the rendered HTML in the console.
	const lipsumNode = screen.getByTestId(/lipsum/i);
	expect(lipsumNode).toHaveTextContent("Lorem ipsum denem sit amet.");
});
