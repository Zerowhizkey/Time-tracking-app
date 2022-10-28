import { createContext, useContext, useState, useEffect } from "react";
import * as api from "../api/api";

export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [times, setTimes] = useState([]);

	const getUser = async () => {
		const data = await api.getUsers();
		setUsers(data);
	};

	const addUser = async (userData) => {
		const data = await api.addUser(userData);
		setUsers((users) => [...users, data]);
	};

	const deleteUser = async (id) => {
		if (!id) return;
		const deleted = await api.deleteUser(id);
		if (!deleted) return;
		setUsers((currentData) => currentData.filter((data) => data.id !== id));
		setProjects((currentData) =>
			currentData.filter((data) => data.userId !== id)
		);
	};

	const getProject = async () => {
		const data = await api.getProjects();
		setProjects(data);
	};

	const addProject = async (projectData) => {
		const data = await api.addProject(projectData);
		setProjects((projects) => [...projects, data]);
	};

	const deleteProject = async (id) => {
		if (!id) return;
		const deleted = await api.deleteProject(id);
		if (!deleted) return;
		console.log(deleted);
		setProjects((currentData) => currentData.filter((data) => data.id !== id));
		setTasks((currentData) =>
			currentData.filter((data) => data.projectId !== id)
		);
	};

	const getTask = async () => {
		const data = await api.getTasks();
		setTasks(data);
	};

	const addTask = async (taskData) => {
		const data = await api.addTask(taskData);
		setTasks((tasks) => [...tasks, data]);
	};

	const deleteTask = async (id) => {
		if (!id) return;
		const deleted = await api.deleteTask(id);
		setTasks((currentData) => currentData.filter((data) => data.id !== id));
		setTimes((currentData) => currentData.filter((data) => data.taskId !== id));
	};

	const getTime = async () => {
		const data = await api.getTimes();
		setTimes(data);
	};

	const addTime = async (timeData) => {
		const data = await api.addTime(timeData);
		setTimes((times) => [...times, data]);
	};

	const deleteTime = async (id) => {
		if (!id) return;
		const deleted = await api.deleteTime(id);
		setTimes((currentData) => currentData.filter((data) => data.id !== id));
	};

	const updateTime = async (id, timeData) => {
		const data = await api.updateTime(id, timeData);
		setTimes((times) => times.map((time) => (time.id !== id ? time : data)));
	};

	useEffect(() => {
		getUser();
		getProject();
		getTask();
		getTime();
	}, []);

	return (
		<ProjectContex.Provider
			value={{
				users,
				getUser,
				addUser,
				deleteUser,
				projects,
				getProject,
				addProject,
				deleteProject,
				tasks,
				getTask,
				addTask,
				deleteTask,
				times,
				getTime,
				addTime,
				deleteTime,
				updateTime,
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
