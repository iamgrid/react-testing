import React from "react";
import { render, screen, userEvent } from "../../../test-utils";
import { loadGreeting as mockLoadGreeting } from "../../../api";
import GreetingLoader from "../GreetingLoader";

jest.mock("../../../api");

test("Loads greetings on click", async () => {
	const testGreeting = "TEST_GREETING";
	mockLoadGreeting.mockResolvedValueOnce({
		data: { greeting: testGreeting },
	});

	render(<GreetingLoader />);

	const nameInput = screen.getByLabelText(/name/i);
	const submitButton = screen.getByText(/load greeting/i);
	const greetingEl = screen.getByLabelText(/greeting/i);

	await userEvent.clear(nameInput);
	await userEvent.type(nameInput, "May");
	await userEvent.click(submitButton);

	// screen.debug();

	expect(mockLoadGreeting).toHaveBeenCalledWith("May");
	expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
	expect(greetingEl).toHaveTextContent(testGreeting);
});
