import React from "react";
import { render, screen, userEvent, waitFor } from "../../../test-utils";
import { savePost as mockSavePost } from "../../../api";
import { BrowserRouter } from "react-router";
import PostEditor from "../PostEditor";

const mockedNavigate = jest.fn();

jest.mock("react-router", () => {
	return {
		...jest.requireActual("react-router"),
		useNavigate: () => mockedNavigate,
	};
});

jest.mock("../../../api");

afterEach(() => {
	jest.clearAllMocks();
});

test("PostEditor.tsx tests", async () => {
	mockSavePost.mockResolvedValueOnce();

	render(
		<BrowserRouter>
			<PostEditor />
		</BrowserRouter>
	);

	const fakeUser = { id: "123" };
	const fakePost = {
		title: "I like turtles",
		content: "Turtles are nice",
		tags: ["turtle", "animal"],
	};

	screen.getByLabelText(/title/i);
	screen.getByLabelText(/content/i);
	screen.getByLabelText(/tags/i);
	const submitButton = screen.getByRole("button", { name: /submit/i });

	await userEvent.type(screen.getByLabelText(/title/i), fakePost.title);
	await userEvent.type(screen.getByLabelText(/content/i), fakePost.content);
	await userEvent.type(
		screen.getByLabelText(/tags/i),
		fakePost.tags.join(", ")
	);

	await userEvent.click(submitButton);

	expect(submitButton).toBeDisabled();

	expect(mockSavePost).toHaveBeenCalledWith({
		authorId: fakeUser.id,
		...fakePost,
	});

	await waitFor(() => {
		expect(mockedNavigate).toHaveBeenCalledWith("/posts");
	});
});
