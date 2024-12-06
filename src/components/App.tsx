import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import GreetingLoader from "./GreetingLoader/GreetingLoader";
import GreetingLoader2 from "./GreetingLoader/GreetingLoader2";
import HiddenMessageUsingReactTransitionGroup from "./HiddenMessageUsingReactTransitionGroup/HiddenMessageUsingReactTransitionGroup";

import "../styles/common.css";

function App() {
	return (
		<div>
			<h1>Hello world!</h1>
			<FavoriteNumber min={1} max={9} />
			<hr />
			<GreetingLoader />
			<hr />
			<GreetingLoader2 />
			<hr />
			<HiddenMessageUsingReactTransitionGroup children="Hello world!" />
		</div>
	);
}

export default App;
