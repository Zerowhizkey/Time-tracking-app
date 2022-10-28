import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20%;
	margin-right: 20%;
	padding-bottom: 20%;
`;

export const ItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
	top: 0;
	position: sticky;
`;

export const Header = styled.h4`
	display: flex;
	height: 5vh;
	margin: 0;
	background-color: #20212c;
	justify-content: center;
	align-items: center;
	letter-spacing: 0.1em;
	font-weight: 200;
`;

export const TaskContainer = styled.div`
	margin-top: 2em;
	display: grid;
	justify-content: center;
	gap: 0.5em;
	justify-items: center;
`;
export const Title = styled.h3`
	text-align: center;
	margin: 0;
	width: 200px;
`;

export const Button = styled.button`
	background-image: linear-gradient(
		to right,
		#da22ff 0%,
		#9733ee 51%,
		#da22ff 100%
	);
	padding: 7px 15px;
	width: 120px;
	text-align: center;
	transition: 0.5s;
	background-size: 200% auto;
	color: white;
	box-shadow: 0 0 20px #0d0c11;
	border-radius: 50px;
	border: none;
	font-family: poppins;

	:hover {
		background-position: right center;
		color: #fff;
		text-decoration: none;
	}
`;

export const Text = styled.p`
	text-align: center;
`;

export const TimeContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20%;
	margin-right: 20%;
`;
