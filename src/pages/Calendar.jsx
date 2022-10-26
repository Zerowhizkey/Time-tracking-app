import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
dayjs.extend(customParseFormat);
dayjs.extend(duration);
const Calendar = () => {
	const [inputValue, setInputValue] = useState(null);
	const { times, getTime, getTask, tasks } = useProjects();

	const handleInput = (e) => {
		const date = dayjs(e.target.value).format("YYYY-MM-DD");
		setInputValue(date);
		// console.log(date);
	};

	// const timeStart = times.filter((time) => inputValue === dayjs(time.timeStart).format("YYYY-MM-DD"));
	// const tasksTi = tasks.filter((task) => task.id === timeStart.taskId);
	// console.log(tasksTi);
	useEffect(() => {
		getTask(), getTime();
	}, []);
	if (!times || times.length === 0) return <p>No tasks with any time data</p>;
	// console.log(timeStart.taskId);
	// console.log(inputValue);
	// console.log(times[0].start);
	// console.log(dayjs(inputValue).isSame(dayjs(times[0].start)));
	return (
		<div>
			<div>
				<input type="date" onChange={handleInput} />
				{tasks.map((task) => {
					// om task har timelog.start === inputvalue
					const foundTimes = times.filter(
						(time) =>
							dayjs(time.timeStart).format("YYYY-MM-DD") === inputValue &&
							task.id === time.taskId &&
							time.timerStop
					);
					// console.log(foundTimes);
					if (foundTimes.length === 0) return;
					return (
						<div key={task.id}>
							<h3>{task.title}</h3>
							{foundTimes.map((time) => (
								<div key={time.id}>
									<p>{time.taskId}</p>
									{/* <p>{time.start}</p> */}
									{/* <p>{time.timerStart}</p> */}
									{/* <p>{time.timerStop}</p> */}
									<p>
										{dayjs
											.duration(time.timerStop - time.timerStart)
											.format("HH:mm:ss")}
									</p>
								</div>
							))}
						</div>
					);
				})}
				{/* {timeStart.map((time) => (
					<div key={time.id}>
						<p>{time.taskId}</p>
						<p>{time.start}</p>
						<p>{time.timerStart}</p>
						<p>{time.timerStop}</p>
					</div>
				))} */}
			</div>
		</div>
	);
};

export default Calendar;
