import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { reportError } from "./api";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import Home from "./components/Home";
import PostEditor from "./components/PostEditor/PostEditor";
import Posts from "./components/Posts/Posts";
import MainMenu from "./components/MainMenu/MainMenu";

const root = createRoot(document.getElementById("root"));
root.render(
	<ErrorBoundary FallbackComponent={ErrorFallback} onError={reportError}>
		<BrowserRouter>
			<MainMenu />
			<Routes>
				<Route index element={<Home />} />
				<Route path="post-editor" element={<PostEditor />} />
				<Route path="posts" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	</ErrorBoundary>
);
