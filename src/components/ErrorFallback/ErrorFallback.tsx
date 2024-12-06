import React from "react";

function ErrorFallback({
	error,
}: // resetErrorBoundary,
{
	error: Error;
	resetErrorBoundary: () => void;
}) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
			{/* <button onClick={resetErrorBoundary}>Try again</button> */}
		</div>
	);
}

export default ErrorFallback;