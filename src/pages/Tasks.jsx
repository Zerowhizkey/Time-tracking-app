import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useProjects } from "../context/ProjectContext";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Container = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 2em;
`;

const Tasks = () => {
	const { project, task, setTask } = useProjects();
	const [input, setInput] = useState("");
	const [currentProject, setCurrentProject] = useState();
	const [currentTask, setCurrentTask] = useState();
	const unique_id = uuid();

	useEffect(() => {
		async function getTask() {
			const { data } = await axios.request({
				method: "get",
				url: `http://localhost:3000/tasks`,
			});
			setTask(data);
		}
		getTask();
	}, []);

	async function addTask() {
		const response = await axios.request({
			method: "post",
			url: `http://localhost:3000/tasks`,
			data: { id: unique_id, projectId: currentProject, title: input },
		});
		return response.data;
	}

	const handleOption = (e) => {
		setCurrentProject(e.target.value);
	};

	const handleTask = (e) => {
		setCurrentTask(e.target.value);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};
	console.log(project);
	console.log(task);
	console.log(currentProject);
	console.log(currentTask);
	return (
		<Container>
			<select onChange={handleOption}>
				<option value="">Pick a Project</option>
				{project
					? project.map((proj) => (
							<option key={proj.id} value={proj.id}>
								{proj.name}
							</option>
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))
					: console.log("error")}
			</select>
			<select onChange={handleTask}>
				<option value="">Pick a Task</option>
				{task
					? task
							.filter((ta) => currentProject === ta.projectId)
							.map((task) => (
								<option value={task.id} key={task.id}>
									{task.title}
								</option>
							))
					: console.log("no tasks")}
			</select>
			<div>
				<input type="text" value={input} onChange={handleInput} />
				<button onClick={addTask}>Add Task</button>
			</div>
		</Container>
	);
};

export default Tasks;

// if (ta.projectId === proj.id)
// {
// 	console.log(ta.projectId);
// }
// {
// 	console.log(proj.id);
// }
// value={currentProject}
// value={currentTask}
// const projId = project.map((project) => project.id);
// console.log(projId)
/* height: 100vh; */
