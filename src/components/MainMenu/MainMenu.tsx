import { NavLink } from "react-router";

function MainMenu() {
	return (
		<nav className="main-menu">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/post-editor">Post Editor</NavLink>
				</li>
				<li>
					<NavLink to="/posts">Posts</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default MainMenu;
