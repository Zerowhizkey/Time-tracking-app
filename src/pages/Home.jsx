import { useRef, useState } from "react";
import { addTime, deleteTime, updateTime } from "../api/api";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import {
	FaStopCircle,
	FaPlayCircle,
	FaPauseCircle,
	FaTrashAlt,
} from "react-icons/fa";
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
	const { tasks, times, getTime } = useProjects();

	const timer = new Timer();
	const date = dayjs(tsn).format("YYYY-MM-DD");
	const timeStart = dayjs(Date.now()).format("dd-hh-mm-ss");
	const intervalRef = useRef();
	const timeRef = useRef(new Timer());
	const timers = timeRef.current;

	const activeTask = tasks.find((task) => task.id === currentTask);

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
		// setCurrentTime(null);
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
	// console.log(timers);
	// console.log(currentTask);
	// console.log(currentTime);
	// console.log(times)
	const totalTime = times.filter((time) => time.taskId === currentTask);
	const total = totalTime.map(
		(total) => {
			const dateStart = dayjs(total.timerStart, "dd-hh-mm-ss");
			const dateEnd = dayjs(total.timerStop, "dd-hh-mm-ss");
			const timeDiff = dateEnd.diff(dateStart, "second");
			return timeDiff;
		}
		// dayjs(total.timerStop, "dd-hh-mm-ss").diff(dayjs(total.timerStart, "dd-hh-mm-ss"))
	);
	// console.log(totalTime, "totala timaie");
	console.log(total, "this is totala");
	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>{currentTime && <p>{logTime}</p>}</h2>
				{activeTask && (
					<>
						<p style={{ marginTop: "0" }}>{activeTask.title}</p>
					</>
				)}
			</Header>

			{tasks &&
				tasks.map((task) => (
					<div key={task.id} style={{ marginTop: "1em", display: "flex" }}>
						{task.title}
						<button value={task.id} onClick={handleCurrentTask}>
							Choose me
						</button>
						{currentTask === task.id ? (
							<div key={task.id}>
								<FaPlayCircle onClick={handleClickAdd}>Start</FaPlayCircle>
								<FaStopCircle
									onClick={() => handleStop({ timerStop: timeStart })}
								></FaStopCircle>
							</div>
						) : (
							<></>
						)}
					</div>
				))}
		</Container>
	);
};

export default Home;
// {/* <div>
// {/* {!timer.isPaused() && !timers.isPaused() && ( */}

// <FaPlayCircle onClick={handlePlay}></FaPlayCircle>
// <FaPauseCircle
// 	style={{ padding: "10px", margin: "10px" }}
// 	onClick={() => handlePause({ timerStop: timeStart })}
// ></FaPauseCircle>

// <ImCross
// 	style={{ padding: "10px", margin: "10px" }}
// 	onClick={handleClickDelete}
// ></ImCross>
// </div> */}
{
	/* <div style={{ display: "flex", justifyContent: "space-around" }}>
					<div>
						<p>total</p>
					</div>
					<div>
						<p>today</p>
					</div>
				</div> */
}
