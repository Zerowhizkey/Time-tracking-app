import React, { useState } from "react";
import styled from "styled-components";
import InputColor from "react-input-color";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useProjects } from "../context/ProjectContext";
import { deleteProjects, deleteTask } from "../api/api";

const Container = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 2em;
`;

const ProjectContainer = styled.div`
	margin-top: 2em;
	display: grid;
`;

const Projects = () => {
	const [color, setColor] = useState({});
	const [input, setInput] = useState("");
	const [currentProject, setCurrentProject] = useState(null);

	const { project, getProject } = useProjects();
	const unique_id = uuid();

	async function addProject() {
		const response = await axios.request({
			method: "post",
			url: `http://localhost:3000/projects`,
			data: { id: unique_id, name: input, color: color.hex },
		});
		await getProject();
		return response.data;
	}

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleDelete = async () => {
		await deleteProjects(currentProject);

		getProject();
	};
	const handleClickProj = (e) => {
		setCurrentProject(e.target.value);
	};
	// const projectTasks = task.filter((ta) => ta.projectId === currentProject);

	return (
		<Container>
			Projects
			<ProjectContainer>
				{project &&
					project.map((proj) => (
						<button onClick={handleClickProj} key={proj.id} value={proj.id}>
							{proj.name}
						</button>
					))}
				<button onClick={handleDelete}>Delete</button>
			</ProjectContainer>
			<div style={{ marginTop: "2em", display: "grid" }}>
				<input required type="text" value={input} onChange={handleInput} />
				<div style={{ display: "flex" }}>
					<InputColor
						initialValue="#5e72e4"
						onChange={setColor}
						placement="middle"
					/>
				</div>
				<button onClick={addProject}>Add a project</button>
			</div>
		</Container>
	);
};

export default Projects;
// const projecto = useLoaderData();
// const [project, setProject] = useState({});
// const handleClick = () => {};

// const projectos = project.map((item) => {
// 	return item.name;
// });
// console.log(projecto);
{
	/* <span style={{ marginTop: "1em" }}>Project 2</span> */
}
{
	/* <span style={{ marginTop: "1em" }}>Project 3</span> */
}
// useEffect(() => {
// 	async function getProject() {
// 		const { data } = await axios.request({
// 			method: "get",
// 			url: `http://localhost:3000/projects`,
// 		});
// 		setProject(data);
// 	}
// 	getProject();
// }, []);
// import { getProducts } from "../api/api";
// const handleClick = async () => {
// 	await addProject();
// 	await getProducts();
// };
// import { useLoaderData } from "react-router-dom";
// console.log(project);
// const projects = [
// 	{ id: 1, title: "nuggets" }
//   ]
//   const tasks = [
// 	{ id: 1, projectId: 1, title: "eat them"},
// 	{ id: 2, projectId: 1, title: "order more"}
//   ]
//   const { tasks } = useTasks();
//   function deleteProject(id) {
// 	const projectId = id; // 1
// 	fetch(`URL/projects/${projectId}`) // DELETE
// 	const tasksToBeDeleted = tasks.filter(task => task.projectId === projectId);
// 	tasksToBeDeleted.forEach((task) => {
// 	  fetch(`URL/tasks/${task.id}`) // DELETE
// 	})
//   }
// if (project.id === task.projectId) {
// for (const task of projectTasks) {
// await deleteTask(task.id);
// }
// projectTasks.forEach(async (task) => {
// });
// }// console.log(currentTask);
// console.log(task);	// if (project.id === task.projectId) {
// setCurrentTask(e.target.value);
// console.log(currentTask);
// }// const [currentTask, setCurrentTask] = useState(null);
// console.log("current project", currentProject);
// console.log("projects tasks", projectTasks);
