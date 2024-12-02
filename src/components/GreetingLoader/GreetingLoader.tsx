import React from "react";
import { loadGreeting } from "../../api";

function GreetingLoader() {
	const [greeting, setGreeting] = React.useState<string>("");
	const [name, setName] = React.useState<string>("Mary");
	async function loadGreetingForInput(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const { data } = await loadGreeting(name);
		setGreeting(data.greeting);
	}
	return (
		<form onSubmit={loadGreetingForInput}>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<button type="submit">Load Greeting</button>
			<div aria-label="greeting">{greeting}</div>
		</form>
	);
}

export default GreetingLoader;
