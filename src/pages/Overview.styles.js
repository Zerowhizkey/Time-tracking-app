import styled from "styled-components";

export const Container = styled.div`
	display: grid;
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
