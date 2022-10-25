import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Root from "./pages/Root";
import Tasks from "./pages/Tasks";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "timer",
				element: <Home />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},
			{
				index: "/",
				element: <Overview />,
				children: [
					{
						path: "projects",
						element: <Projects />,
					},
					{
						path: "tasks",
						element: <Tasks />,
					},
				],
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
// import { getProducts, getTasks, getTimes } from "./api/api";
// loader: getProducts,
// {
// 	index: true,
// 	element: <Projects />
// },
// loader: async () => {
// 	const products = await getProducts();
// 	const tasks = await getTasks();
// 	const times = await getTimes();
// 	return { products, tasks, times };
// },
// loader: getProducts,
