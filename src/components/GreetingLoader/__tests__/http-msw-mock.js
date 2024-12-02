// import "whatwg-fetch";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import React from "react";
import { render, screen, userEvent, waitFor } from "../../../test-utils";
import GreetingLoader from "../GreetingLoader2";

const server = setupServer(
	http.post("/greeting", async ({ request, params, cookies }) => {
		// console.log("MSW caught the following request:", request);
		const data = await request.json();
		// console.log("MSW caught the following request data:", data);

		const subject = data.subject;

		return HttpResponse.json({
			greeting: `Hello, ${subject}!`,
		});
	})
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Loads greetings on click", async () => {
	render(<GreetingLoader />);

	const nameInput = screen.getByLabelText(/^name$/i);
	const nameEl = screen.getByLabelText(/^name display$/i);
	const loadGreetingButton = screen.getByText(/load greeting/i);
	const greetingEl = screen.getByLabelText(/greeting/i);

	await userEvent.clear(nameInput);
	await userEvent.type(nameInput, "May");

	expect(nameEl).toHaveTextContent("Name: May");

	await userEvent.click(loadGreetingButton);

	await waitFor(() => {
		expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();
	});

	expect(greetingEl).toHaveTextContent(`Hello, May!`);
});
