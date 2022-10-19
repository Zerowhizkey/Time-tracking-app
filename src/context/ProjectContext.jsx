import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getTimes, getTasks } from "../api/api";

export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {
	const [project, setProject] = useState([]);
	const [task, setTask] = useState([]);
	const [time, setTime] = useState([]);

	async function getProject() {
		const data = await getProducts();
		setProject(data);
	}

	async function getTask() {
		const data = await getTasks();
		setTask(data);
	}

	async function getTime() {
		const data = await getTimes();
		setTime(data);
	}

	useEffect(() => {
		function worki() {
			getProject();
			getTask();
			getTimes();
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
				getTime,
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
