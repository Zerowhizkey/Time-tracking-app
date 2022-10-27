import styled from "styled-components";

// export const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	flex-direction: column;
// 	margin-top: 2em;
// 	margin-left: 5%;
// 	margin-right: 5%;
// 	margin-bottom: 15%;
// `;
export const Container = styled.div`
	display: grid;
	margin-top: 2em;
	padding-bottom: 20%;
`;

export const Input = styled.input`
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

export const Header = styled.h4`
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

export const ItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
	top: 0;
	position: sticky;
`;

export const Button = styled.button`
	color: white;
	font-size: 1.2rem;
	text-decoration: none;
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 0.2em;
	border: #20212c solid 0.15em;
	background-color: #20212c;
`;

export const ButtonActive = styled.button`
	color: white;
	font-size: 1.2rem;
	text-decoration: none;
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 0.2em;
	border: none;
	background-color: transparent;
`;

export const InputContainer = styled.div`
	display: grid;
	gap: 1em;
	padding: 2em;
	margin: 0 2.5em;
	background-color: #20212c;
	border-radius: 20px;
`;
export const TaskContainer = styled.div`
	margin-top: 2em;
	display: grid;
	justify-content: center;
	gap: 0.5em;
	margin-left: 15%;
	margin-right: 15%;
	justify-items: center;
	border: #20212c solid 0.15em;
	background-color: #20212c;
	border-radius: 20px;

	/* align-items: center; */
	/* justify-items: center; */
`;

export const TimeContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20%;
	margin-right: 20%;
	border-bottom: 1px solid #da22ff;
	margin-top: 1em;
	margin-bottom: 1em;
`;

export const Text = styled.p`
	text-align: center;
	margin: 0
`;

export const Title = styled.h3`
	text-align: center;
	margin: 0;
	width: 200px;
`;
