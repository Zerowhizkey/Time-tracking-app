import React, { useState } from "react";
import styled from "styled-components";
import InputColor from "react-input-color";
import axios from "axios";
import { v4 as uuid } from "uuid";
// import { useLoaderData } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
// import { getProducts } from "../api/api";

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
	const { project } = useProjects();
	const unique_id = uuid();

	async function addProject() {
		const response = await axios.request({
			method: "post",
			url: `http://localhost:3000/projects`,
			data: { id: unique_id, name: input, color: color.hex },
		});

		return response.data;
	}

	// const handleClick = async () => {
	// 	await addProject();
	// 	await getProducts();
	// };

	const handleInput = (e) => {
		setInput(e.target.value);
	};
	console.log(project);
	return (
		<Container>
			Projects
			<ProjectContainer>
				{project &&
					project.map((proj) => (
						<span key={proj.id} style={{ marginTop: "1em", display: "flex" }}>
							{proj.name}
						</span>
					))}
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
