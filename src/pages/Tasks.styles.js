import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 2em;
	margin-left: 5%;
	margin-right: 5%;
	margin-bottom: 15%;
`;

export const Exit = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0;
	padding: 0;
`;

export const Select = styled.select`
	text-decoration: none;
	background-color: #2e2e39;
	border: solid 0.15em #2e2e39;
	border-radius: 10px;
`;

export const Option = styled.option`
	text-decoration: none;
	background-color: transparent;
	border: solid 0.15em #2e2e39;
	color: white;
	border-radius: 10px;
`;

export const InputContainer = styled.div`
	display: grid;
	gap: 1em;
	padding: 2em;
	margin: 0 2.5em;
	background-color: #20212c;
	border-radius: 20px;
`;

export const SelectContainer = styled.div`
	display: grid;
	gap: 1em;
	padding: 2em;
	margin: 0 2.5em;
	background-color: #20212c;
	border-radius: 20px;
	margin-bottom: 1em;
`;

export const InputText = styled.input`
	text-decoration: none;
	background-color: transparent;
	color: white;
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
	padding: 10px 35px;
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

export const Title = styled.h3`
	text-align: center;
`;

export const ProjectContainer = styled.div`
	margin-top: 2em;
	display: grid;
	justify-content: center;
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
	max-width: 100px;
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
