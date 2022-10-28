import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
	background-color: #20212c;
`;

const Navbar = () => {
	let activeStyle = {
		color: "#da22ff",
		fontSize: "x-large",
		padding: "0.5em",
	};
	let inActiveStyle = {
		color: "white",
		fontSize: "x-large",
		padding: "0.5em",
	};

	return (
		<NavContainer>
			<li style={{ display: "flex" }}>
				<NavLink
					to={"overview"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				>
					<FaToolbox />
				</NavLink>
			</li>

			<li style={{ display: "flex" }}>
				<NavLink
					to={"calendar"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				>
					<RiCalendarFill />
				</NavLink>
			</li>
			<li style={{ display: "flex" }}>
				<NavLink
					to={"timer"}
					style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
				>
					<RiTimerFill />
				</NavLink>
			</li>
		</NavContainer>
	);
};

export default Navbar;
