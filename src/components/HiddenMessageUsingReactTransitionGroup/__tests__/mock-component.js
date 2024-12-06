import React from "react";
import { render, userEvent, screen } from "../../../test-utils";
import HiddenMessageUsingReactTransitionGroup from "../HiddenMessageUsingReactTransitionGroup";

jest.mock("react-transition-group", () => {
	return {
		CSSTransition: (props) => (props.in ? props.children : null),
	};
});

test("shows hidden message when toggle is clicked", async () => {
	const myMessage = "hello world";
	render(
		<HiddenMessageUsingReactTransitionGroup>
			{myMessage}
		</HiddenMessageUsingReactTransitionGroup>
	);
	const toggleButton = screen.getByText(/toggle/i);
	expect(screen.queryByText(myMessage)).not.toBeInTheDocument();

	await userEvent.click(toggleButton);
	expect(screen.getByText(myMessage)).toBeInTheDocument();

	await userEvent.click(toggleButton);
	expect(screen.queryByText(myMessage)).not.toBeInTheDocument();
});
