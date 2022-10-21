import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { DateTime } from "luxon";
const Calendar = () => {
	const [inputDateValue, setInputDateValue] = useState(null);
	const { times, getTime, getTask } = useProjects();

	const handleInputChange = (e) => {
		console.log(e.target.value);
		const datetime = DateTime.fromFormat(e.target.value, "yyyy-mm-dd");
		// console.log(datetime.ts);	
		setInputDateValue(datetime.ts);
		// console.log(datetime.hasSame(times[0].start, "month"));
	};
	const formTime = times.map((time) => time.start);
	useEffect(() => {
		getTask();
		getTime();
	}, []);
	if (!times || times.length === 0) return <></>;

	// if (inputDateValue) {
	// }
	console.log(inputDateValue);
	console.log(formTime);
	// const formatedTime = DateTime.fromMillis(times[0].start);

	return (
		<div>
			<input onChange={handleInputChange} type="date" />
			Calendar
			{inputDateValue !== null &&
			new DateTime(inputDateValue).hasSame(formTime, "day") && <p>{Date(formTime)}</p>}
				
		</div>
	);
};

{
	/* {times.map((time) => (
	<div key={time.id}>{time.start}</div>
))} */
}
export default Calendar;
