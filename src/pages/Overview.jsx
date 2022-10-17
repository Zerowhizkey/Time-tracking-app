import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	/* justify-content: center; */
	/* height: 100vh; */
`;

const Header = styled.h2`
	width: 100vw;
	height: 5vh;
	margin: 0;
	background-color: lightgray;
	text-align: center;
`;

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	font-size: x-large;
`;

const Overview = () => {
	return (
		<Container style={{ border: "red solid 1px" }}>
			<Header>Overview</Header>
			<ItemContainer>
				<NavLink to={"projects"}>Projects</NavLink>
				<NavLink to={"tasks"}>Tasks</NavLink>
			</ItemContainer>
			<Outlet />
		</Container>
	);
};

export default Overview;