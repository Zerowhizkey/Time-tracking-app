import { useEffect, useMemo, useRef, useState } from "react";
import { deleteTime, updateTime } from "../api/api";
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
import duration from "dayjs/plugin/duration";
import { Container, ItemContainer, Header } from "./Home.styles";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

// const Container = styled.div`
// 	display: grid;
// `;

// const ItemContainer = styled.div`
// 	display: grid;
// `;

// const Header = styled.div`
// 	background-color: lightgray;
// 	text-align: center;
// `;

const Home = () => {
	// const [tsn, setTsn] = useState(Date.now());
	const [currentTask, setCurrentTask] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [logTime, setLogTime] = useState(0);
	const { tasks, times, getTime, addTime } = useProjects();

	const timer = useRef(new Timer());
	// const date = dayjs(tsn).format("YYYY-MM-DD");
	// const timeStart = dayjs(Date.now()).format("dd-hh-mm-ss");
	const intervalRef = useRef();
	// const timeRef = useRef(new Timer());
	// const timers = timeRef.current;

	const activeTask = tasks.find((task) => task.id === currentTask);

	const handleClickAdd = async () => {
		const timeData = {
			id: uuid(),
			taskId: currentTask,
			// start: date,
			timerStart: Date.now(),
			timerStop: 0,
		};
		await addTime(timeData);
		timer.current.start();
		// timers.start();
		startTime();
		setCurrentTime(timeData);
		// getTime();
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
		timer.current.resume();
		// timers.resume();
		console.log(timer.isRunning());
	};

	const handlePause = async (timeData) => {
		timer.current.pause();
		// timers.pause();
		console.log(timer.isPaused());
		await updateTime(currentTime.id, timeData);
	};

	const handleStop = async (timeData) => {
		await updateTime(currentTime.id, timeData);
		await getTime();
		stopTime();
		// timers.stop();
		// calcTotal();
		// setCurrentTime(null);
	};

	const startTime = () => {
		const id = setInterval(() => {
			setLogTime(timer.current.ms());
		}, 100);
		intervalRef.current = id;
	};

	const stopTime = () => {
		timer.current.stop();
		clearInterval(intervalRef.current);
		setLogTime(0);
	};
	// console.log(timers);
	// console.log(currentTask);
	// console.log(currentTime);
	// console.log(times)
	const totalTime = useMemo(() => {
		const filterdTimes = times.filter(
			(time) => time.taskId === currentTask && time.timerStop
		);
		return filterdTimes.reduce((sum, curr) => {
			return sum + (curr.timerStop - curr.timerStart);
		}, 0);
	}, [times, currentTask]);

	const showTotal = useMemo(() => {
		return dayjs.duration(totalTime + logTime).format("HH:mm:ss");
	}, [totalTime, logTime]);

	// const totalTime = times.filter((time) => time.taskId === currentTask);

	// const total = totalTime.map((total) => {
	// 	if (!total.timerStop) return;
	// 	const dateStart = dayjs(total.timerStart, "dd-hh-mm-ss");
	// 	const dateEnd = dayjs(total.timerStop, "dd-hh-mm-ss");
	// 	const timeDiff = dateEnd.diff(dateStart, "second");
	// 	// console.log(timeDiff, "this is totala");
	// 	return timeDiff;
	// 	// console.log(total)
	// });
	// console.log(totalTime);

	// useEffect(() => {
	// 	getTime();
	// }, []);

	return (
		<Container>
			<Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}>
					{/* {currentTime && <p>{dayjs.duration(logTime).format("HH:mm:ss")}</p>} */}
				</h2>
				{activeTask && (
					<>
						<p style={{ marginTop: "0" }}>
							{activeTask.title} {showTotal}
						</p>
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
									onClick={() => handleStop({ timerStop: Date.now() })}
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
