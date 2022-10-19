import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {
	const [project, setProject] = useState([]);
	const [task, setTask] = useState([]);
	const [time, setTime] = useState([]);

	async function getProject() {
		const { data } = await axios.request({
			method: "get",
			url: `http://localhost:3000/projects`,
		});
		setProject(data);
	}

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
		getProject();
		getTask();
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
