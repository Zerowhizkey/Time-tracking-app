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

	const handleInputTwo = (e) => {
		const date = dayjs(e.target.value).format("YYYY-MM-DD HH-mm");
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
							dayjs(time.timeStart).format("YYYY-MM-DD HH-mm") <=
								inputValueTwo &&
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
