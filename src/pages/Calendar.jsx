import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { DateTime } from "luxon";
const Calendar = () => {
	const [inputDateValue, setInputDateValue] = useState(null);
	const { times, getTime, getTask } = useProjects();

	const handleInputChange = (e) => {
		console.log(e.target.value);
		const datetime = DateTime.fromFormat(e.target.value, "yyyy-mm-dd");
		console.log(datetime.ts);
		setInputDateValue(datetime.ts);
		console.log(datetime.hasSame(times[1].start, "day"));
	};
	const formTime = times.map((time) => time);
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
			console.log(	new DateTime(inputDateValue).hasSame(formTime, "day") )&& (
					<div key={formTime.id}>
						<p>{formTime.id}</p>
						<p>{formTime.start}</p>
					</div>
				)}
		</div>
	);
};

{
	/* {times.map((time) => (
	<div key={time.id}>{time.start}</div>
))} */
}
export default Calendar;
