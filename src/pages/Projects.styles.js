import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 2em;
	margin-left: 5%;
	margin-right: 5%;
	margin-bottom: 15%;
`;

export const InputContainer = styled.div`
	display: grid;
	gap: 1em;
	padding: 2em;
	background-color: #20212c;
	border-radius: 20px;
`;

export const InputText = styled.input`
	text-decoration: none;
	background-color: transparent;
	border: solid 0.15em #2e2e39;
	padding: 1em;
	border-radius: 10px;
`;

export const Button = styled.button`
	background-image: linear-gradient(
		to right,
		#da22ff 0%,
		#9733ee 51%,
		#da22ff 100%
	);
	/* margin: 10px; */
	padding: 10px 35px;
	text-align: center;
	/* text-transform: uppercase; */
	transition: 0.5s;
	background-size: 200% auto;
	color: white;
	box-shadow: 0 0 20px #0d0c11;
	border-radius: 50px;
	/* border: none; */
	font-family: poppins;

	:hover {
		background-position: right center; /* change the direction of the change here */
		color: #fff;
		text-decoration: none;
	}
`;

export const ColorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const Text = styled.p``;

export const Title = styled.h3`
	text-align: center;
`;

export const ProjectContainer = styled.div`
	margin-top: 2em;
	display: grid;
	justify-content: center;
	/* grid-template-columns: repeat(2, 1fr); */
`;

export const ProjectList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2em;
	justify-content: space-between;
	align-items: center;
	padding-left: 0;
`;

export const ProjectItem = styled.li`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1em;
	background-color: #20212c;
	list-style: none;
	padding: 2em;
	border-radius: 5px;
	font-weight: medium;
	font-size: 14px;
	letter-spacing: 0.07em;
`;
