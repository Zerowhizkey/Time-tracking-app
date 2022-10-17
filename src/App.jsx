import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Root from "./pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: "/",
				element: <Home />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},
			{
				path: "overview",
				element: <Overview />,
			},
		],
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
