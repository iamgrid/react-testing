import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import GreetingLoader from "./GreetingLoader/GreetingLoader";
import GreetingLoader2 from "./GreetingLoader/GreetingLoader2";
import HiddenMessageUsingReactTransitionGroup from "./HiddenMessageUsingReactTransitionGroup/HiddenMessageUsingReactTransitionGroup";
import { reportError } from "../api";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback/ErrorFallback";
import Bomb from "./Bomb/Bomb";

import "../styles/common.css";

function App() {
	return (
		<div>
			<ErrorBoundary FallbackComponent={ErrorFallback} onError={reportError}>
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
			</ErrorBoundary>
		</div>
	);
}

export default App;
