import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const ProjectContex = createContext();
import { getProducts } from "../api/api";
export const ProjectProvider = ({ children }) => {
	const [project, setProject] = useState([]);
	const [task, setTask] = useState([]);
	const [time, setTime] = useState([]);

	// useEffect(() => {
	async function getProject() {
		const data = await getProducts();
		setProject(data);
		// const { data } = await axios.request({
		// 	method: "get",
		// 	url: `http://localhost:3000/projects`,
		// });
		// setProject(data);
	}
	// getProject();
	// }, []);

	// useEffect(() => {
	async function getTask() {
		const { data } = await axios.request({
			method: "get",
			url: `http://localhost:3000/tasks`,
		});
		setTask(data);
	}
	// }, []);

	useEffect(() => {
		function worki() {
			getProject();
			getTask();
		}
		worki();
	}, []);

	return (
		<ProjectContex.Provider
			value={{
				project,
				setProject,
				task,
				setTask,
				time,
				setTime,
				getProject,
				getTask,
			}}
		>
			{children}
		</ProjectContex.Provider>
	);
};

export const useProjects = () => {
	const context = useContext(ProjectContex);
	if (!context) {
		throw new Error("UseProjects is outside ProjectProvider");
	}
	return context;
};
