import { useState } from "react";
import { addTime } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

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
	const [currentTask, setCurrentTask] = useState(null);
	const { tasks, getTime } = useProjects();
	const unique_id = uuid();

	const handleCurrentTask = (e) => {
		setCurrentTask(e.target.value);
	};

	const handleTime = async (timeData) => {
		await addTime(timeData);
		getTime();
	};

	const theChoosenOne = tasks.find((task) => task.id === currentTask);

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

			{tasks &&
				tasks.map((task) => (
					<button
						onClick={handleCurrentTask}
						key={task.id}
						value={task.id}
						style={{ marginTop: "1em", display: "flex" }}
					>
						{task.title}
					</button>
				))}

			<ItemContainer></ItemContainer>
		</Container>
	);
};

export default Home;
