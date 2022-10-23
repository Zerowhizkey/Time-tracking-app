import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const Calendar = () => {
	const [inputValue, setInputValue] = useState(null);
	const { times, getTime, getTask } = useProjects();

	const handleInput = (e) => {
		const date = dayjs(e.target.value).format("YYYY-MM-DD");
		setInputValue(date);
		// console.log(date);
	};

	const timeStart = times.filter((time) => inputValue === time.start);

	useEffect(() => {
		getTask(), getTime();
	}, []);
	if (!times || times.length === 0) return <></>;

	// console.log(inputValue);
	// console.log(times[0].start);
	// console.log(dayjs(inputValue).isSame(dayjs(times[0].start)));
	return (
		<div>
			<div>
				<input type="date" onChange={handleInput} />

				{timeStart.map((time) => (
					<div key={time.id}>
						{/* <p>{time.id}</p> */}
						{/* <p>{time.taskId}</p> */}
						<p>{time.start}</p>
						<p>{time.timerStart}</p>
						<p>{time.timerStop}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
