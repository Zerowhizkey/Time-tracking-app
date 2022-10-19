import { useState } from "react";
import { addTime, deleteTime } from "../api/api";
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
	const [currentTime, setCurrentTime] = useState(null);
	const { tasks, getTime } = useProjects();
	const unique_id = uuid();

	const theChoosenOne = tasks.find((task) => task.id === currentTask);

	const handleClickAdd = async (timeData) => {
		await addTime(timeData);
		setCurrentTime(timeData);
		getTime();
	};

	const handleClickDelete = async () => {
		if (!currentTime.id) return;
		await deleteTime(currentTime.id);
		setCurrentTime(null);
	};

	const handleCurrentTask = (e) => {
		setCurrentTask(e.target.value);
	};

	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>00:12:34</h2>
				{theChoosenOne && (
					<>
						<p style={{ marginTop: "0" }}>{theChoosenOne.title}</p>

						{currentTime ? (
							<button onClick={handleClickDelete}>Delete</button>
						) : (
							<button
								onClick={() =>
									handleClickAdd({
										id: unique_id,
										taskId: currentTask,
										start: "00:01",
										stop: "20:00",
									})
								}
							>
								Start
							</button>
						)}
					</>
				)}
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<div>
						<p>total</p>
						{currentTime && <p>{currentTime.start}</p>}
					</div>
					<div>
						<p>today</p>
						{currentTime && <p>{currentTime.stop}</p>}
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
