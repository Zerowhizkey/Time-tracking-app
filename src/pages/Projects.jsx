import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { TiDelete, TiFolderDelete } from "react-icons/ti";
import * as S from "./Projects.styles";

const Projects = () => {
	const [input, setInput] = useState("");
	const [color, setColor] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState();
	const { users, projects, addProject, deleteProject } = useProjects();

	const handleClickAdd = async () => {
		if (!input.trim()) return;
		const projectData = {
			id: uuid(),
			userId: currentUser,
			name: input,
			color: color,
		};
		await addProject(projectData);
		setInput("");
		setColor("");
		setIsOpen(false);
	};
	const handleOption = (e) => {
		setCurrentUser(e.target.value);
	};

	const handleDelete = async (id) => {
		await deleteProject(id);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return isOpen === true ? (
		<S.Container>
			<S.SelectContainer>
				<S.Select onChange={handleOption}>
					<S.Option value="">Pick a User</S.Option>
					{users
						? users.map((user) => (
								<S.Option key={user.id} value={user.id}>
									{user.name}
								</S.Option>
						  ))
						: console.log("error")}
				</S.Select>
				<S.Exit>
					<TiDelete
						size={25}
						style={{
							color: " #da22ff",
						}}
						onClick={() => setIsOpen(false)}
					>
						X
					</TiDelete>
				</S.Exit>
			</S.SelectContainer>
			<S.InputContainer>
				<S.InputText type="text" value={input} onChange={handleInput} />
				<S.ColorContainer>
					<S.Text>Pick a color :</S.Text>
					<S.Input type="color" onChange={(e) => setColor(e.target.value)} />
				</S.ColorContainer>
				<S.Button onClick={() => handleClickAdd()}>Add Project</S.Button>
			</S.InputContainer>
		</S.Container>
	) : (
		<S.Container>
			<S.InputContainer>
				<S.Button onClick={() => setIsOpen(true)}>Add a project</S.Button>
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
