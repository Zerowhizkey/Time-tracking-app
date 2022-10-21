import { useState } from "react";
import { addTask, deleteTask } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { ImGift } from "react-icons/im";

const Container = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 2em;
`;

const Tasks = () => {
	const [currentProject, setCurrentProject] = useState(null);
	const [currentTask, setCurrentTask] = useState(null);
	const [input, setInput] = useState("");
	const { projects, tasks, getTask } = useProjects();

	const handleClickAdd = async () => {
		if (!input.trim()) return;
		if (!currentProject) return setInput("");

		const taskData = {
			id: uuid(),
			projectId: currentProject,
			title: input,
		};

		await addTask(taskData);
		getTask();
		setInput("");
	};

	const handleClickDelete = async () => {
		if (!currentTask) return;
		await deleteTask(currentTask);
		getTask();
		setCurrentTask(null);
	};

	const handleOption = (e) => {
		setCurrentProject(e.target.value);
	};

	const handleTask = (e) => {
		setCurrentTask(e.target.value);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return (
		<Container>
			<select onChange={handleOption}>
				<option value="">Pick a Project</option>
				{projects
					? projects.map((project) => (
							<option key={project.id} value={project.id}>
								{project.name}
							</option>
					  ))
					: console.log("error")}
			</select>
			{currentProject && (
				<select onChange={handleTask}>
					<option value=""> Pick a Task</option>
					{tasks
						? tasks
								.filter((task) => currentProject === task.projectId)
								.map((tasks) => (
									<option value={tasks.id} key={tasks.id}>
										{tasks.title}
									</option>
								))
						: console.log("no tasks")}
				</select>
			)}
			<div>
				<input type="text" value={input} onChange={handleInput} />
				<button onClick={() => handleClickAdd()}>Add Task</button>

				<button onClick={handleClickDelete}>Delete</button>
			</div>
		</Container>
	);
};

export default Tasks;

// if (task.projectId === project.id)
// {
// 	console.log(task.projectId);
// }
// {
// 	console.log(project.id);
// }
// value={currentProject}
// value={currentTask}
// const projId = projects.map((projects) => projects.id);
// console.log(projId)
/* height: 100vh; */
// console.log(projects);
// console.log(tasks);
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
