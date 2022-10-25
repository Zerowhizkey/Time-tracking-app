import { createContext, useContext, useState, useEffect } from "react";
import * as api from "../api/api";

export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [times, setTimes] = useState([]);

	const getProject = async () => {
		const data = await api.getProjects();
		setProjects(data);
	};

	const getTask = async () => {
		const data = await api.getTasks();
		setTasks(data);
	};

	const getTime = async () => {
		const data = await api.getTimes();
		setTimes(data);
	};

	const addTime = async (timeData) => {
		const data = await api.addTime(timeData);
		setTimes((times) => [...times, data]);
	};

	useEffect(() => {
		getProject();
		getTask();
		getTime();
	}, []);

	return (
		<ProjectContex.Provider
			value={{
				projects,
				tasks,
				times,
				getProject,
				getTask,
				getTime,
				addTime,
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
