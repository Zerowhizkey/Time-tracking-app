import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	padding-top: 10em;
	justify-content: center;
`;

const Home = () => {
	// const getProducts = useLoaderData();
	// const products = getProducts.map((product) => {
	// 	return product;
	// });

	const { products, tasks, times } = useLoaderData();

	return (
		<Container>
			{products.map((product) => (
				<div key={product.id} style={{ backgroundColor: product.color }}>
					<p>{product.name}</p>
				</div>
			))}
			{tasks.map((task) => (
				<div key={task.projectId}>
					<p>{task.title}</p>
				</div>
			))}
			{times.map((time) => (
				<div key={time.taskId}>
					<p>start: {time.start} end: {time.end}</p>
				</div>
			))}
		</Container>
	);
};

export default Home;
