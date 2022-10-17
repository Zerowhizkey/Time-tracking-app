import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
	display: grid;
	padding-top: 10em;
	justify-content: center;
`;
const Overview = () => {
	return (
		<Container style={{ border: "red solid 1px" }}>
			<div>
				<Link to={"projects"}>Projects</Link>
				<Link to={"tasks"}>Tasks</Link>
			</div>
			<Outlet />
		</Container>
	);
};

export default Overview;
