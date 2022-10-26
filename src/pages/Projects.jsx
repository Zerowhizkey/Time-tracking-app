import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { TiDelete, TiFolderDelete } from "react-icons/ti";
import * as S from "./Projects.styles";

const Projects = () => {
	const [input, setInput] = useState("");
	const [color, setColor] = useState("");
	const { projects, addProject, deleteProject } = useProjects();

	const handleClickAdd = async () => {
		if (!input.trim()) return;
		const projectData = {
			id: uuid(),
			name: input,
			color: color,
		};
		if (projects.find((project) => project.name === projectData.name)) return;
		await addProject(projectData);
		setInput("");
		setColor("");
	};

	const handleDelete = async (id) => {
		await deleteProject(id);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return (
		<S.Container>
			<S.InputContainer>
				<S.InputText
					type="text"
					value={input}
					onChange={handleInput}
					placeholder="Write here ...."
				/>

				<S.ColorContainer>
				<S.Text>Pick a color :</S.Text>
					<S.Input type="color" onChange={(e) => setColor(e.target.value)} />
				</S.ColorContainer>

				<S.Button onClick={handleClickAdd}>Add a project</S.Button>
			</S.InputContainer>
			<S.ProjectContainer>
				<S.Title>Projects</S.Title>
				<S.ProjectList>
					{projects &&
						projects.map((project) => (
							<S.ProjectItem key={project.id}>
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
							</S.ProjectItem>
						))}
				</S.ProjectList>
			</S.ProjectContainer>
		</S.Container>
	);
};

export default Projects;
