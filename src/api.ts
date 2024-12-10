// this is just a fake module to simulate interacting with a server

// simulate the network request time...
const sleep = (time: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});

async function savePost(postData: any) {
	const functionSignature = "api.ts@savePost()";
	await sleep(1000);

	const wrappedData = { data: { post: postData } };

	console.log(functionSignature, "wrappedData:", wrappedData);

	return wrappedData;
}

const greetings: string[] = [
	"Hello",
	"Hi",
	"Hey there",
	`What's up`,
	"Howdy",
	`G'day`,
];

async function loadGreeting(subject: string) {
	return { data: { greeting: `${await fetchRandomGreeting()} ${subject}` } };
}

async function fetchRandomGreeting() {
	await sleep(1000);
	return greetings[Math.floor(Math.random() * greetings.length)];
}

// a fire-and-forget function to report errors
// for componentDidCatch
async function reportError() {
	const functionSignature = "api.ts@reportError()";
	console.log(functionSignature, "called");
	await sleep(1000);
	return { success: true };
}

async function submitForm() {
	await sleep(1000);
	return { success: true };
}

export { savePost, loadGreeting, reportError, submitForm };
