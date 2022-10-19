import React, { useState } from "react";
import styled from "styled-components";
import { useProjects } from "../context/ProjectContext";
import { addTime } from "../api/api";
import { v4 as uuid } from "uuid";
const Container = styled.div`
	display: grid;
`;

const ItemContainer = styled.div`
	display: grid;
`;

const Header = styled.div`
	background-color: lightgray;
	text-align: center;
`;

const Home = () => {
	const { task, getTime } = useProjects();
	const [currentTask, setCurrentTask] = useState(null);
	const unique_id = uuid();

	const handleCurrentTask = (e) => {
		// console.log(e.target.value);
		setCurrentTask(e.target.value);
	};

	const handleTime = async (timeData) => {
		await addTime(timeData);
		getTime();
	};

	// console.log(currentTask);
	const theChoosenOne = task.find((ta) => ta.id === currentTask);
	// console.log(theChoosenOne);
	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>00:12:34</h2>
				{theChoosenOne && (
					<>
						<p style={{ marginTop: "0" }}>{theChoosenOne.title}</p>
						<button
							onClick={() =>
								handleTime({
									id: unique_id,
									taskId: currentTask,
									start: "bajs",
									stop: "korv",
								})
							}
						>
							Start
						</button>
					</>
				)}
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
			{task &&
				task.map((ta) => (
					<button
						onClick={handleCurrentTask}
						key={ta.id}
						value={ta.id}
						style={{ marginTop: "1em", display: "flex" }}
					>
						{ta.title}
					</button>
				))}
			<ItemContainer></ItemContainer>
		</Container>
	);
};

export default Home;
// const { products, tasks, times } = useLoaderData();

// const product = products.map((product) => {
// 	return product.name;
// });
// console.log(product)
{
	/* <p>{product}</p> */
}
{
	/* {products.map((product) => (
					<div key={product.id} style={{ backgroundColor: product.color }}>
						<p>{product.name}</p>
					</div>
				))} */
}
{
	/* {tasks.map((task) => (
					<div key={task.projectId}>
						<p>{task.title}</p>
					</div>
				))}
				{times.map((time) => (
					<div key={time.taskId}>
						<p>
							start: {time.start} end: {time.end}
						</p> */
}
{
	/* </div> */
}
{
	/* ))} */
}
// import { useLoaderData } from "react-router-dom";
// console.log(task);
