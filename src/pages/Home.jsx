import { useMemo, useRef, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import { Timer } from "timer-node";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import * as style from "./Home.styles";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Home = () => {
	const [currentTask, setCurrentTask] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [logTime, setLogTime] = useState(0);
	const { tasks, times, getTime, addTime, updateTime } = useProjects();

	const timer = useRef(new Timer());
	const intervalRef = useRef();

	const activeTask = tasks.find((task) => task.id === currentTask);
	const badTime = times.find((time) => time.timerStop === 0);

	const handleClickAdd = async () => {
		const timeData = {
			id: uuid(),
			taskId: currentTask,
			timerStart: Date.now(),
			timerStop: 0,
		};
		await addTime(timeData);
		timer.current.start();
		startTime();
		setCurrentTime(timeData);
	};

	const handleCurrentTask = (e) => {
		if (badTime?.taskId === e.target.value) {
			timer.current.start();
			startTime();
			setCurrentTime(badTime);
		}
		setCurrentTask(e.target.value);
	};

	const handleStop = async (timeData) => {
		await updateTime(currentTime.id, timeData);
		await getTime();
		stopTime();
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

	const totalTime = useMemo(() => {
		const filterdTimes = times.filter(
			(time) => time.taskId === currentTask && time.timerStop
		);

		const elapsed = filterdTimes.reduce((sum, curr) => {
			return sum + (curr.timerStop - curr.timerStart);
		}, 0);
		return badTime ? elapsed + (Date.now() - badTime.timerStart) : elapsed;
	}, [times, currentTask]);

	const showTotal = useMemo(() => {
		return dayjs.duration(totalTime + logTime).format("HH:mm:ss");
	}, [totalTime, logTime]);

	return (
		<style.Container>
			<style.Header>
				<h2 style={{ marginTop: "0" }}>Timer</h2>
				<h2 style={{ marginBottom: "0" }}></h2>
				{activeTask && (
					<>
						<p style={{ marginTop: "0" }}>
							{activeTask.title} {showTotal}
						</p>
					</>
				)}
			</style.Header>

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
		</style.Container>
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
// 	getTime()
{
	/* {currentTime && <p>{dayjs.duration(logTime).format("HH:mm:ss")}</p>} */
}
// }, []);
// console.log(timers);
// console.log(currentTask);
// console.log(currentTime);
// console.log(times)
// timers.stop();
// calcTotal();
// setCurrentTime(null);
// getTime();
// timers.start();
// timers.resume();
// timers.pause();
// const [tsn, setTsn] = useState(Date.now());
// const date = dayjs(tsn).format("YYYY-MM-DD");
// const timeStart = dayjs(Date.now()).format("dd-hh-mm-ss");
// const timeRef = useRef(new Timer());
// const timers = timeRef.current;
// start: date,
// const handlePlay = async () => {
// 	timer.current.resume();

// 	console.log(timer.isRunning());
// };

// const handlePause = async (timeData) => {
// 	timer.current.pause();

// 	console.log(timer.isPaused());
// 	await updateTime(currentTime.id, timeData);
// };
// const handleClickDelete = async () => {
// 	if (!currentTime.id) return;
// 	await deleteTime(currentTime.id);
// 	setCurrentTime(null);
// };
