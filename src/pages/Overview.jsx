import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
`;

const Header = styled.h4`
	display: flex;
	width: 100vw;
	height: 5vh;
	margin: 0;
	background-color: #20212c;
	justify-content: center;
	align-items: center;
	letter-spacing: 0.1em;
	font-weight: 200;
	/* text-transform: uppercase; */
`;

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

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

const Overview = () => {
	let activeStyle = {
		color: "white",
		fontSize: "1.2rem",
		textDecoration: "none",
		width: "100%",
		height: "100%",
		textAlign: "center",
		padding: "0.2em",
		// border: "#20212c solid 0.15em",
		backgroundColor: "#20212c",
	};
	let inActiveStyle = {
		color: "white",
		fontSize: "1.2rem",
		textDecoration: "none",
		width: "100%",
		height: "100%",
		textAlign: "center",
		padding: "0.2em",
	};
	return (
		<Container>
			<Header>Overview</Header>
			<ItemContainer>
				<NavLink
					to={"projects"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				>
					Projects
				</NavLink>
				<NavLink
					to={"tasks"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				>
					Tasks
				</NavLink>
			</ItemContainer>
			<Outlet />
		</Container>
	);
};

export default Overview;
/* justify-content: center; */
/* height: 100vh; */
