import React from "react";
import { CSSTransition } from "react-transition-group";

function Fade(props: any) {
	return (
		<CSSTransition unmountOnExit timeout={1000} classNames="fade" {...props} />
	);
}

function HiddenMessageUsingReactTransitionGroup({
	children,
}: {
	children: React.ReactNode;
}) {
	const [show, setShow] = React.useState(false);
	const nodeRef = React.useRef(null);
	const toggle = () => setShow((s) => !s);
	return (
		<div>
			<button onClick={toggle}>Toggle</button>
			<Fade nodeRef={nodeRef} in={show}>
				<div ref={nodeRef}>{children}</div>
			</Fade>
		</div>
	);
}

export default HiddenMessageUsingReactTransitionGroup;
