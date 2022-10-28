import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import * as S from "./Tasks.styles";
import { TiDelete, TiFolderDelete } from "react-icons/ti";
const Tasks = () => {
	const [currentProject, setCurrentProject] = useState(null);
	const [input, setInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const { projects, tasks, addTask, deleteTask } = useProjects();

	const handleClickAdd = async () => {
		if (!input.trim()) return;
		if (!currentProject) return setInput("");
		const taskData = {
			id: uuid(),
			projectId: currentProject,
			title: input,
		};
		await addTask(taskData);
		setInput("");
		setIsOpen(false);
	};

	const handleClickDelete = async (id) => {
		if (!id) return;
		await deleteTask(id);
	};

	const handleOption = (e) => {
		setCurrentProject(e.target.value);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return isOpen === true ? (
		<S.Container>
			<S.SelectContainer>
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
				<S.Select onChange={handleOption}>
					<S.Option value="">Pick a Project</S.Option>
					{projects
						? projects.map((project) => (
								<S.Option
									key={project.id}
									value={project.id}
									style={{ backgroundColor: `${project.color}` }}
								>
									{project.name}
								</S.Option>
						  ))
						: console.log("error")}
				</S.Select>
			</S.SelectContainer>
			<S.InputContainer>
				<S.InputText type="text" value={input} onChange={handleInput} />
				<S.Button onClick={() => handleClickAdd()}>Add Task</S.Button>
			</S.InputContainer>
		</S.Container>
	) : (
		<>
			<S.Container>
				<S.InputContainer>
					<S.Button onClick={() => setIsOpen(true)}>Add Task</S.Button>
				</S.InputContainer>
			</S.Container>
			<S.ProjectContainer>
				<S.Title>Tasks</S.Title>
				<S.ProjectList>
					{tasks.map((task) => {
						return (
							<S.ProjectItem key={task.id}>
								<TiFolderDelete
									size={25}
									style={{
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
									onClick={() => handleClickDelete(task.id)}
								/>
								<p style={{ width: "50px" }}>{task.title}</p>
							</S.ProjectItem>
						);
					})}
				</S.ProjectList>
			</S.ProjectContainer>
		</>
	);
};

export default Tasks;
