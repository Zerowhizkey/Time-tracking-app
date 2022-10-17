import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
`;

const ItemContainer = styled.div `
display: grid;

`

const Header = styled.div`
	background-color: lightgray;
	text-align: center;
`;

const Home = () => {
	const { products, tasks, times } = useLoaderData();

	const product = products.map((product) => {
		return product.name;
	});
	console.log(product)

	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>00:12:34</h2>
				<p style={{ marginTop: "0" }}>Clean office</p>

				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<div>
						<p>total</p>
						<p>00:52:14</p>
					</div>
					<div>
						<p>today</p>
						<p>00:12:34</p>
					</div>
				</div>
			</Header>
			<ItemContainer>
				<p>{product}</p>
				{/* {products.map((product) => (
					<div key={product.id} style={{ backgroundColor: product.color }}>
						<p>{product.name}</p>
					</div>
				))} */}
				{tasks.map((task) => (
					<div key={task.projectId}>
						<p>{task.title}</p>
					</div>
				))}
				{times.map((time) => (
					<div key={time.taskId}>
						<p>
							start: {time.start} end: {time.end}
						</p>
					</div>
				))}
			</ItemContainer>
		</Container>
	);
};

export default Home;