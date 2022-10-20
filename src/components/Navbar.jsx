import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiTimerFill, RiCalendarFill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";
const NavContainer = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	bottom: 0;
	left: 0;
	background-color: lightgray;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	padding: 0.5em;
	font-size: x-large;
`;

const Navbar = () => {
	return (
		<NavContainer>
			<li style={{ display: "flex" }}>
				<NavLink to={"/"}>
					<RiTimerFill />
				</NavLink>
			</li>

			<li style={{ display: "flex" }}>
				<NavLink to={"calendar"}>
					<RiCalendarFill />
				</NavLink>
			</li>

			<li style={{ display: "flex" }}>
				<NavLink to={"overview/projects"}>
					<FaToolbox />
				</NavLink>
			</li>
		</NavContainer>
	);
};

export default Navbar;
