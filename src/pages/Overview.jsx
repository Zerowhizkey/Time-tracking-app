import { useState } from "react";
import * as S from "./Overview.styles";
import Projects from "./Projects";
import Tasks from "./Tasks";
const Overview = () => {
	const [state, setState] = useState("projects");

	return state === "projects" ? (
		<S.Container>
			<S.Header>Overview</S.Header>
			<S.ItemContainer>
				<S.ButtonActive> Projects</S.ButtonActive>

				<S.Button onClick={() => setState("tasks")}>Tasks</S.Button>
			</S.ItemContainer>
			<Projects />
		</S.Container>
	) : (
		<S.Container>
			<S.Header>Overview</S.Header>
			<S.ItemContainer>
				<S.Button onClick={() => setState("projects")}> Projects</S.Button>

				<S.ButtonActive>Tasks</S.ButtonActive>
			</S.ItemContainer>
			<Tasks />
		</S.Container>
	);
};

export default Overview;
/* justify-content: center; */
/* height: 100vh; */
{
	/* <NavLink
					to={"projects"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				> */
}
{
	/* </NavLink> */
}
{
	/* <NavLink
					to={"tasks"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				> */
}
{
	/* </NavLink> */
}
// let activeStyle = {
// 	color: "white",
// 	fontSize: "1.2rem",
// 	textDecoration: "none",
// 	width: "100%",
// 	height: "100%",
// 	textAlign: "center",
// 	padding: "0.2em",
// 	// border: "#20212c solid 0.15em",
// 	backgroundColor: "#20212c",
// };
// let inActiveStyle = {
// 	color: "white",
// 	fontSize: "1.2rem",
// 	textDecoration: "none",
// 	width: "100%",
// 	height: "100%",
// 	textAlign: "center",
// 	padding: "0.2em",
// };
// const NaLink = styled(NavLink)`
// 	display: flex;
// 	/* text-decoration: none; */
// 	/* color: inherit; */
// 	font-size: 1.2rem;
// 	/* background-color: #20212c; */
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%;
// 	height: 100%;
// 	padding: 0.2em;
// 	/* padding-bottom: 15px; */
// 	border-bottom: #20212c solid 0.15em;
// `;
