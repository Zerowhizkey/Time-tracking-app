import { useState } from "react";
import { deleteProjects, addProject } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import InputColor from "react-input-color";
import { GrProjects } from "react-icons/gr";
import { TiDelete, TiFolderDelete } from "react-icons/ti";
import {
	Container,
	ProjectContainer,
	InputContainer,
	InputText,
	Button,
	Title,
	ProjectList,
	ProjectItem,
	ColorContainer,
	Text,
} from "./Projects.styles";
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
	// const [currentProject, setCurrentProject] = useState(null);
	const [input, setInput] = useState("");
	const [color, setColor] = useState("");
	const { projects, getProject, getTask } = useProjects();
	// const unique_id = uuid();

	const handleClickAdd = async () => {
		if (!input.trim()) return;

		const projectData = {
			id: uuid(),
			name: input,
			color: color,
		};
		if (projects.find((project) => project.name === projectData.name)) return;
		// if (projects.find((project) => project.color === projectData.color)) return;
		await addProject(projectData);
		getProject();
		setInput("");
		setColor("");
	};

	const handleDelete = async (id) => {
		await deleteProjects(id);
		getProject();
		// await
		// getTask();
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	// const handleClickProject = (e) => {
	// 	setCurrentProject(e.target.value);
	// };

	return (
		<Container>
			<InputContainer>
				<InputText
					type="text"
					value={input}
					onChange={handleInput}
					placeholder="Write here ...."
				/>

				<Text>Pick a color :</Text>
				<ColorContainer>
					<input type="color" onChange={(e) => setColor(e.target.value)} />
				</ColorContainer>

				<Button onClick={handleClickAdd}>Add a project</Button>
			</InputContainer>
			<ProjectContainer>
				<Title>Projects</Title>
				<ProjectList

				// onClick={handleClickProject}
				// value={project.id}
				>
					{projects &&
						projects.map((project) => (
							<ProjectItem key={project.id}>
								<TiFolderDelete
									size={25}
									style={{
										backgroundColor: `${project.color}`,
										padding: "0.25em",
										borderRadius: "10%",
										color: " #da22ff",
									}}
								/>
								<TiDelete
									size={25}
									style={{
										color: " #da22ff",
									}}
									onClick={() => handleDelete(project.id)}
								/>
								<p style={{ width: "50px" }}>{project.name}</p>
							</ProjectItem>
						))}
				</ProjectList>
			</ProjectContainer>
		</Container>
	);
};

export default Projects;
