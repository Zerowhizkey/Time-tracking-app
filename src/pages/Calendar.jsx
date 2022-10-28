import dayjs from "dayjs";
import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import * as S from "./Calendar.styles";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Calendar = () => {
	const [inputValue, setInputValue] = useState(null);
	const [inputValueTwo, setInputValueTwo] = useState(null);
	const { times, tasks } = useProjects();

	const handleInput = (e) => {
		const date = dayjs(e.target.value).format("YYYY-MM-DD HH-mm");
		setInputValue(date);
	};
	// console.log(inputValue);

	const handleInputTwo = (e) => {
		const date = dayjs(e.target.value).format("YYYY-MM-DD HH-mm");
		console.log(date);
		setInputValueTwo(date);
	};

	if (!times || times.length === 0) return <p>No tasks with any time data</p>;
	return (
		<>
			<S.Header>Calendar</S.Header>
			<S.Container>
				<S.InputContainer>
					<S.Input type="datetime-local" onChange={handleInput} />
					<S.Input type="datetime-local" onChange={handleInputTwo} />
				</S.InputContainer>
				{tasks.map((task) => {
					const foundTimes = times.filter(
						(time) =>
							dayjs(time.timeStart).format("YYYY-MM-DD HH-mm") >= inputValue &&
							dayjs(time.timeStart).format("YYYY-MM-DD HH-mm") <= inputValueTwo &&
							task.id === time.taskId &&
							time.timerStop
					);

					if (foundTimes.length === 0) return;
					return (
						<S.TaskContainer key={task.id}>
							<S.Title>{task.title}</S.Title>
							{foundTimes.map((time) => (
								<S.TimeContainer key={time.id}>
									<S.Text>{time.taskId}</S.Text>

									<S.Text>
										{dayjs
											.duration(time.timerStop - time.timerStart)
											.format("HH:mm:ss")}
									</S.Text>
								</S.TimeContainer>
							))}
						</S.TaskContainer>
					);
				})}
			</S.Container>
		</>
	);
};

export default Calendar;
// const timeStart = times.filter((time) => inputValue === dayjs(time.timeStart).format("YYYY-MM-DD"));
// const tasksTi = tasks.filter((task) => task.id === timeStart.taskId);
// console.log(tasksTi);
{
	/* {timeStart.map((time) => (
					<div key={time.id}>
						<p>{time.taskId}</p>
						<p>{time.start}</p>
						<p>{time.timerStart}</p>
						<p>{time.timerStop}</p>
					</div>
				))} */
}
{
	/* <p>{time.start}</p> */
}
{
	/* <p>{time.timerStart}</p> */
}
{
	/* <p>{time.timerStop}</p> */
}
// console.log(timeStart.taskId);
// console.log(inputValue);
// console.log(times[0].start);
// console.log(dayjs(inputValue).isSame(dayjs(times[0].start)));
// om task har timelog.start === inputvalue
// console.log(foundTimes);
// console.log(date);
// dayjs(time.timeStart).format("YYYY-MM-DD") === inputValue
// <= time.timeStart && inputValueTwo >= time.timeStart &&
// console.log(inputValue);
// console.log(inputValueTwo);
// useEffect(() => {
// 	getTask(), getTime();
// }, []);
