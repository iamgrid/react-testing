import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import GreetingLoader from "./GreetingLoader/GreetingLoader";
import GreetingLoader2 from "./GreetingLoader/GreetingLoader2";
import HiddenMessageUsingReactTransitionGroup from "./HiddenMessageUsingReactTransitionGroup/HiddenMessageUsingReactTransitionGroup";
import Bomb from "./Bomb/Bomb";

import "../styles/common.css";
import PostEditor from "./PostEditor/PostEditor";

function Home() {
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
			<hr />
			<Bomb shouldThrow={false} />
		</div>
	);
}

export default Home;
