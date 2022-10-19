import { useState } from "react";
import { addTask, deleteTask } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 2em;
`;

const Tasks = () => {
	const [currentProject, setCurrentProject] = useState(null);
	const [currentTask, setCurrentTask] = useState(null);
	const [input, setInput] = useState("");
	const { project, task, getTask } = useProjects();
	const unique_id = uuid();

	async function handleClick(taskData) {
		await addTask(taskData);
		getTask();
	}

	async function handleDelete() {
		if (!currentTask) return;
		console.log(currentTask);
		await deleteTask(currentTask);
		getTask();
		setCurrentTask(null);
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

	// console.log(currentTask);

	return (
		<Container>
			<select onChange={handleOption}>
				<option value="">Pick a Project</option>
				{project
					? project.map((proj) => (
							<option key={proj.id} value={proj.id}>
								{proj.name}
							</option>
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
				<button
					onClick={() =>
						handleClick({
							id: unique_id,
							projectId: currentProject,
							title: input,
						})
					}
				>
					Add Task
				</button>

				<button onClick={handleDelete}>Delete</button>
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
// console.log(project);
// console.log(task);
// console.log(currentProject);
// console.log(currentTask);
// currentTask,
// useEffect(() => {
// 	async function getTask() {
// 		const { taskData } = await axios.request({
// 			method: "get",
// 			url: `http://localhost:3000/tasks`,
// 		});
// 		setTask(taskData);
// 	}
// 	getTask();
// }, []);
// async function addTask(taskData) {
// 	const response = await axios.request({
// 		method: "post",
// 		url: `http://localhost:3000/tasks`,
// 		taskData: { id: unique_id, projectId: currentProject, title: input },
// 	});
// 	await getTask();
// 	return response.taskData;
// }
