import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import GreetingLoader from "./GreetingLoader/GreetingLoader";
import GreetingLoader2 from "./GreetingLoader/GreetingLoader2";

function App() {
	return (
		<div>
			<h1>Hello world!</h1>
			<FavoriteNumber min={1} max={9} />
			<hr />
			<GreetingLoader />
			<hr />
			<GreetingLoader2 />
		</div>
	);
}

export default App;
