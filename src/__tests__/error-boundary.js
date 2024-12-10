import React from "react";
import { render, screen } from "../test-utils";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback/ErrorFallback";
import { reportError as mockReportError } from "../api";
import Bomb from "../components/Bomb/Bomb";

jest.mock("../api");

beforeAll(() => {
	jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
	console.error.mockRestore();
});

afterEach(() => {
	jest.clearAllMocks();
});

const ErrorBoundaryProvider = ({ children }) => (
	<ErrorBoundary FallbackComponent={ErrorFallback} onError={mockReportError}>
		{children}
	</ErrorBoundary>
);

test("catches error in child component", async () => {
	mockReportError.mockResolvedValueOnce({ success: true });

	const errorMessageRegex = /^something went wrong.*$/i;

	const { rerender } = render(<Bomb shouldThrow={false} />, {
		wrapper: ErrorBoundaryProvider,
	});

	expect(
		screen.queryByTestId("error-boundary-error-message")
	).not.toBeInTheDocument();

	rerender(<Bomb shouldThrow={true} />);

	// verify the error was caught
	expect(
		screen.queryByTestId("error-boundary-error-message")
	).toBeInTheDocument();
	expect(screen.queryByTestId("error-boundary-error-message")).toHaveRole(
		"alert"
	);
	expect(
		screen.queryByTestId("error-boundary-error-message").textContent
	).toMatch(errorMessageRegex);

	// verify the error was reported
	expect(mockReportError).toHaveBeenCalledTimes(1);

	const error = expect.any(Error);
	const info = { componentStack: expect.stringContaining("Bomb") };
	expect(mockReportError).toHaveBeenCalledWith(error, info);

	// verify the error was logged to the console
	expect(console.error).toHaveBeenCalled();
});
