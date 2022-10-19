import { useState } from "react";
import { addTime, deleteTime, updateTime } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { useStopwatch } from "react-timer-hook";
import { FaStopCircle, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styled from "styled-components";
import axios from "axios";

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
	const [logTime, setLogTime] = useState("");
	const { tasks, getTime } = useProjects();
	const unique_id = uuid();
	const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
		useStopwatch({ autoStart: true });

	const theChoosenOne = tasks.find((task) => task.id === currentTask);

	// const setLogTime( = { d: { days }, h: { hours }, m: { minutes }, s: { seconds })

	const handleClickAdd = async (timeData) => {
		await addTime(timeData);
		start();
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

	const handlePlay = () => {
		start();
	};

	const handlePause = async (timeData) => {
		pause();
		await updateTime(currentTime.id, timeData);
	};

	const handleStop = () => {
		pause();
		setCurrentTime(null);
	};

	const handleSavedTime = (e) => {
		setLogTime(e.target.value);
		console.log(e.target.value);
		console.log(logTime);
		console.log(currentTime.id);
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
							<div>
								{isRunning ? (
									<FaPauseCircle
										style={{ padding: "10px", margin: "10px" }}
										onClick={() => handlePause({ start: logTime })}
									></FaPauseCircle>
								) : (
									<FaPlayCircle onClick={handlePlay}></FaPlayCircle>
								)}

								<FaStopCircle
									style={{ padding: "10px", margin: "10px" }}
									onClick={handleStop}
								></FaStopCircle>
								<ImCross
									style={{ padding: "10px", margin: "10px" }}
									onClick={handleClickDelete}
								></ImCross>
							</div>
						) : (
							<FaPlayCircle
								onClick={() =>
									handleClickAdd({
										id: unique_id,
										taskId: currentTask,
										start: "00:00",
										stop: "00:00",
									})
								}
							>
								{/* { days, hours, minutes, seconds } */}
								Start
							</FaPlayCircle>
						)}
					</>
				)}
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<div>
						<p>total</p>
						{logTime && <p>{logTime}</p>}
					</div>
					<div>
						<p>today</p>

						{currentTime && (
							<p
								value={currentTime.id}
								onChange={() =>
									handleSavedTime({
										d: days,
										h: hours,
										m: minutes,
										s: seconds,
									})
								}
							>
								d:{days} h:{hours} m:{minutes} s:{seconds}
							</p>
						)}
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
