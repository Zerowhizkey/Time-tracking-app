import { useMemo, useRef, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Timer } from "timer-node";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import * as S from "./Timers.styles";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Timers = () => {
	const [currentTask, setCurrentTask] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [logTime, setLogTime] = useState(0);
	const { tasks, times, addTime, updateTime, deleteTime } = useProjects();

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

	const handleClickDelete = async (id) => {
		await deleteTime(id);
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
	// console.log(logTime);
	return (
		<>
			<S.Header>Timer</S.Header>
			<S.Container>
				{activeTask && (
					<S.ItemContainer>
						<S.Text>
							{activeTask.title} {showTotal}
						</S.Text>
					</S.ItemContainer>
				)}
				{tasks &&
					tasks.map((task) => {
						const foundTimes = times.filter((time) => task.id === time.taskId);
						return (
							<S.TaskContainer key={task.id}>
								<S.Title>{task.title}</S.Title>
								<S.Button value={task.id} onClick={handleCurrentTask}>
									Choose me
								</S.Button>
								{currentTask === task.id ? (
									<>
										<S.TimeContainer key={task.id}>
											<FaPlayCircle
												onClick={handleClickAdd}
												size={50}
												style={{
													color: " #da22ff",
												}}
											>
												Start
											</FaPlayCircle>
											<FaStopCircle
												onClick={() => handleStop({ timerStop: Date.now() })}
												size={50}
												style={{
													color: " #da22ff",
												}}
											></FaStopCircle>
										</S.TimeContainer>
										{foundTimes.map((time) => {
											if (foundTimes)
												return (
													<S.TimeContainer key={time.id}>
														<p>
															{dayjs
																.duration(time.timerStop - time.timerStart)
																.format("HH:mm:ss")}
														</p>
														<TiDelete
															size={50}
															style={{
																color: " #da22ff",
															}}
															onClick={() => handleClickDelete(time.id)}
														/>
													</S.TimeContainer>
												);
										})}
									</>
								) : (
									<></>
								)}
							</S.TaskContainer>
						);
					})}
			</S.Container>
		</>
	);
};

export default Timers;
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

{
	/* <p style={{ marginTop: "0" }}>
							{activeTask.title} {showTimeLog}
						</p> */
}
// const showTimeLog = useMemo(() => {
// 	return dayjs.duration(logTime).format("HH:mm:ss");
// }, [logTime]);
