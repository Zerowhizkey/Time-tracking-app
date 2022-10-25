import { useState } from "react";
import { deleteProjects, addProject } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import InputColor from "react-input-color";
import { Container, ProjectContainer } from "./Projects.styles";
// const Container = styled.div`
// 	display: grid;
// 	justify-content: center;
// 	margin-top: 2em;
// `;

// const ProjectContainer = styled.div`
// 	margin-top: 2em;
// 	display: grid;
// `;

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(null);
	const [input, setInput] = useState("");
	const [color, setColor] = useState("");
	const { projects, getProject, getTask } = useProjects();
	// const unique_id = uuid();

	const handleClickAdd = async () => {
		if (!input.trim()) return;

		const projectData = {
			id: uuid(),
			name: input,
			color: color.hex,
		};
		if (projects.find((project) => project.name === projectData.name)) return;
		if (projects.find((project) => project.color === projectData.color)) return;
		await addProject(projectData);
		getProject();
		setInput("");
	};

	const handleDelete = async () => {
		await deleteProjects(currentProject);
		await getProject();
		getTask();
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleClickProject = (e) => {
		setCurrentProject(e.target.value);
	};

	return (
		<Container>
			Projects
			<ProjectContainer>
				{projects &&
					projects.map((project) => (
						<button
							onClick={handleClickProject}
							key={project.id}
							value={project.id}
						>
							{project.name}
						</button>
					))}
				<button onClick={handleDelete}>Delete</button>
			</ProjectContainer>
			<div style={{ marginTop: "2em", display: "grid" }}>
				<input type="text" value={input} onChange={handleInput} />
				<div style={{ display: "flex" }}>
					<InputColor
						initialValue="#5e72e4"
						onChange={setColor}
						placement="middle"
					/>
				</div>
				<button onClick={handleClickAdd}>Add a project</button>
			</div>
		</Container>
	);
};

export default Projects;
