import { useState } from "react";
import * as S from "./Overview.styles";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Users from "./Users";
const Overview = () => {
	const [usersOpen, setUsersOpen] = useState(true);
	const [projectsOpen, setProjectsOpen] = useState(false);
	const [tasksOpen, setTasksOpen] = useState(false);

	const HandleClickUsers = () => {
		setUsersOpen(true);
		setProjectsOpen(false);
		setTasksOpen(false);
	};
	const HandleClickProjects = () => {
		setUsersOpen(false);
		setProjectsOpen(true);
		setTasksOpen(false);
	};
	const HandleClickTasks = () => {
		setUsersOpen(false);
		setProjectsOpen(false);
		setTasksOpen(true);
	};

	return (
		<S.Container>
			<S.Header>Overview</S.Header>
			<S.ItemContainer>
				{usersOpen ? (
					<S.ButtonActive onClick={HandleClickUsers}>Users</S.ButtonActive>
				) : (
					<S.Button onClick={HandleClickUsers}>Users</S.Button>
				)}
				{projectsOpen ? (
					<S.ButtonActive onClick={HandleClickProjects}>
						Projects
					</S.ButtonActive>
				) : (
					<S.Button onClick={HandleClickProjects}>Projects</S.Button>
				)}
				{tasksOpen ? (
					<S.ButtonActive onClick={HandleClickTasks}>Tasks</S.ButtonActive>
				) : (
					<S.Button onClick={HandleClickTasks}>Tasks</S.Button>
				)}
			</S.ItemContainer>
			{usersOpen && <Users />}
			{projectsOpen && <Projects />}
			{tasksOpen && <Tasks />}
		</S.Container>
	);
};

export default Overview;
