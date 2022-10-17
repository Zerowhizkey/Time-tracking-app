import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputColor from "react-input-color";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useLoaderData } from "react-router-dom";

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
	const projecto = useLoaderData();
	const [color, setColor] = useState({});
	const [project, setProject] = useState({});
	const unique_id = uuid();
	// const handleClick = () => {};
	useEffect(() => {
		async function getProject() {
			const { data } = await axios.request({
				method: "get",
				url: `http://192.168.1.86:3000/projects`,
			});
			setProject(data);
		}
		getProject();
	}, []);
	async function addProject(e) {
		e.preventDefault();

		const response = await axios.request({
			method: "post",
			url: `http://192.168.1.86:3000/projects`,
			data: { id: unique_id, name: project, color: color.hex },
		});
		return response.data;
	}
	const projectos = projecto.map((item) => {
		return item.name;
	});
	// console.log(projecto);
	return (
		<Container>
			Projects
			<ProjectContainer>
				<span style={{ marginTop: "1em" }}>{projectos}</span>
				{/* <span style={{ marginTop: "1em" }}>Project 2</span> */}
				{/* <span style={{ marginTop: "1em" }}>Project 3</span> */}
			</ProjectContainer>
			<div style={{ marginTop: "2em", display: "grid" }}>
				<input
					required
					type="text"
					value={project.name}
					onChange={(e) => setProject(e.target.value)}
				/>
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
