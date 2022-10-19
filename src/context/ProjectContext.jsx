import { createContext, useContext, useState, useEffect } from "react";
import { getProjects, getTasks, getTimes } from "../api/api";

export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [times, setTimes] = useState([]);

	const getProject = async () => {
		const data = await getProjects();
		setProjects(data);
	};

	const getTask = async () => {
		const data = await getTasks();
		setTasks(data);
	};

	const getTime = async () => {
		const data = await getTimes();
		setTimes(data);
	};

	useEffect(() => {
		const getAll = () => {
			getProject();
			getTask();
			getTimes();
		};
		getAll();
	}, []);

	return (
		<ProjectContex.Provider
			value={{
				projects,
				setProjects,
				tasks,
				setTasks,
				times,
				setTimes,
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
