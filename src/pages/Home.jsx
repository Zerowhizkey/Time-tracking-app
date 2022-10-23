import { useRef, useState } from "react";
import { addTime, deleteTime, updateTime } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { FaStopCircle, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Timer } from "timer-node";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import styled from "styled-components";

dayjs.extend(customParseFormat);

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
	const [tsn, setTsn] = useState(Date.now());
	const [currentTask, setCurrentTask] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [logTime, setLogTime] = useState("");
	const { tasks, getTime } = useProjects();

	const timer = new Timer();
	const date = dayjs(tsn).format("YYYY-MM-DD");
	const timeStart = dayjs(Date.now()).format("dd-hh-mm-ss");
	const intervalRef = useRef();
	const timeRef = useRef(new Timer());
	const timers = timeRef.current;

	const theChoosenOne = tasks.find((task) => task.id === currentTask);

	const handleClickAdd = async () => {
		const timeData = {
			id: uuid(),
			taskId: currentTask,
			start: date,
			timerStart: timeStart,
			timerStop: "",
		};
		await addTime(timeData);
		timer.start();
		timers.start();
		startTime();
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

	const handlePlay = async () => {
		timer.resume();
		timers.resume();
		console.log(timer.isRunning());
	};

	const handlePause = async (timeData) => {
		timer.pause();
		timers.pause();
		console.log(timer.isPaused());
		await updateTime(currentTime.id, timeData);
	};

	const handleStop = async (timeData) => {
		timer.stop();
		timers.stop();
		stopTime();
		await updateTime(currentTime.id, timeData);
		setCurrentTime(null);
	};

	const startTime = () => {
		const id = setInterval(() => {
			setLogTime(timers.format());
		}, 100);
		intervalRef.current = id;
	};

	const stopTime = () => {
		clearInterval(intervalRef.current);
		setLogTime(timers.format());
	};
	console.log(timers);
	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>{currentTime && <p>{logTime}</p>}</h2>
				{theChoosenOne && (
					<>
						<p style={{ marginTop: "0" }}>{theChoosenOne.title}</p>

						{currentTime ? (
							<div>
								{!timer.isPaused() && !timers.isPaused() ? (
									<FaPauseCircle
										style={{ padding: "10px", margin: "10px" }}
										onClick={() => handlePause({ timerStop: timeStart })}
									></FaPauseCircle>
								) : (
									<FaPlayCircle onClick={handlePlay}></FaPlayCircle>
								)}

								<FaStopCircle
									style={{ padding: "10px", margin: "10px" }}
									onClick={() => handleStop({ timerStop: timeStart })}
								></FaStopCircle>
								<ImCross
									style={{ padding: "10px", margin: "10px" }}
									onClick={handleClickDelete}
								></ImCross>
							</div>
						) : (
							<FaPlayCircle onClick={handleClickAdd}>Start</FaPlayCircle>
						)}
					</>
				)}
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<div>
						<p>total</p>
						{/* {logTime && <p>{logTime}</p>} */}
					</div>
					<div>
						<p>today</p>
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
