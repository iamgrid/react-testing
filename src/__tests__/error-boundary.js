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

test("catches error in child component", async () => {
	mockReportError.mockResolvedValueOnce({ success: true });
	const { rerender } = render(
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={mockReportError}>
			<Bomb shouldThrow={false} />
		</ErrorBoundary>
	);

	expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();

	rerender(
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={mockReportError}>
			<Bomb shouldThrow={true} />
		</ErrorBoundary>
	);

	// verify the error was caught
	expect(screen.queryByText(/something went wrong/i)).toBeInTheDocument();

	// verify the error was reported
	expect(mockReportError).toHaveBeenCalledTimes(1);

	const error = expect.any(Error);
	const info = { componentStack: expect.stringContaining("Bomb") };
	expect(mockReportError).toHaveBeenCalledWith(error, info);

	// verify the error was logged to the console
	expect(console.error).toHaveBeenCalled();
});
