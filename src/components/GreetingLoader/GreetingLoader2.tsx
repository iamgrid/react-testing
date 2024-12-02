import React, { useCallback } from "react";
import { loadGreeting } from "../../api2";

function GreetingLoader2() {
	const [greeting, setGreeting] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState<boolean>(null);
	const [name, setName] = React.useState<string>("Mary");

	const loadGreetingForInput = useCallback(
		async (event: React.MouseEvent) => {
			const functionSignature = "GreetingLoader2.tsx@loadGreetingForInput()";
			event.preventDefault();
			setIsLoading(true);
			const response = await loadGreeting(name);

			// console.log(functionSignature, "response received:", response);

			setIsLoading(false);

			if (!("greeting" in response)) {
				console.error(
					functionSignature,
					"response missing greeting key:",
					response
				);
				return;
			}
			setGreeting(response.greeting);
		},
		[name]
	);

	function renderLoading() {
		if (isLoading === null) {
			return <div aria-label="loading">Click the button above to start!</div>;
		} else if (isLoading) {
			return <div aria-label="loading">Loading...</div>;
		} else {
			return null;
		}
	}

	return (
		<form>
			<label htmlFor="nameInput">Name</label>
			<input
				id="nameInput"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<button type="button" onClick={(event) => loadGreetingForInput(event)}>
				Load Greeting
			</button>
			<div aria-label="name display">Name: {name}</div>
			{renderLoading()}
			<div aria-label="greeting">{greeting}</div>
		</form>
	);
}

export default GreetingLoader2;
