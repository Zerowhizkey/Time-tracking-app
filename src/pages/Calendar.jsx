import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { DateTime } from "luxon";
const Calendar = () => {
	const [inputDateValue, setInputDateValue] = useState(null);
	const { times, getTime, getTask } = useProjects();

	const handleInputChange = (e) => {
		console.log(e.target.value);
		const datetime = DateTime.fromFormat(e.target.value, "yyyy-MM-dd");
		console.log(datetime);
		setInputDateValue(datetime.ts);
	};

	useEffect(() => {
		getTask();
		getTime();
	}, []);

	if (!times || times.length === 0) return <></>;
	// const formatedTime = DateTime.fromMillis(times[0].start);
	console.log(inputDateValue);
	return (
		<div>
			<input onChange={handleInputChange} type="date" />
			<div></div>
			Calendar
		</div>
	);
};

export default Calendar;
