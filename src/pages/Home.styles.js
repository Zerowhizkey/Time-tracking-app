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

export const ItemContainer = styled.div`
	display: grid;
`;

// export const Header = styled.div`
// 	background-color: lightgray;
// 	text-align: center;
// `;
export const Header = styled.div`
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