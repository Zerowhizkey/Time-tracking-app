import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import Calendar from "./pages/Calendar";
import Overview from "./pages/Overview";
import Root from "./pages/Root";
import Timers from "./pages/Timers";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Overview />,
			},
			{
				path: "overview",
				element: <Overview />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},

			{
				path: "timer",
				element: <Timers />,
			},
		],
	},
]);

function App() {
	return (
		<div className="App">
			<ProjectProvider>
				<RouterProvider router={router} />
			</ProjectProvider>
		</div>
	);
}

export default App;
