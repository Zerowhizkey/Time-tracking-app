import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getProducts, getTasks, getTimes } from "./api/api";
import "./App.css";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Root from "./pages/Root";
import Tasks from "./pages/Tasks";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: "/",
				element: <Home />,
				loader: async () => {
					const products = await getProducts();
					const tasks = await getTasks();
					const times = await getTimes();
					return { products, tasks, times };
				},
				// loader: getProducts,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},
			{
				path: "overview",
				element: <Overview />,
				children: [
					// {
					// 	index: true,
					// 	element: <Projects />
					// },
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
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
