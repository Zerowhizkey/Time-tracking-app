import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
const RootContainer = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100vw;
`;

const Root = () => {
	return (
		<>
			<RootContainer>
				<Outlet />
			</RootContainer>
			<Navbar />
		</>
	);
};

export default Root;
