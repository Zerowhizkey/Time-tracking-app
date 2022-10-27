import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RootContainer = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100vw;
`;

const Root = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("overview");
	}, []);
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
