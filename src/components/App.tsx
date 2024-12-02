import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import GreetingLoader from "./GreetingLoader/GreetingLoader";

function App() {
	return (
		<div>
			<h1>Hello world!</h1>
			<FavoriteNumber min={1} max={9} />
			<hr />
			<GreetingLoader />
		</div>
	);
}

export default App;
