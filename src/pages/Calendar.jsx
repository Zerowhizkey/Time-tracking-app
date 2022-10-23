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
		console.log(date);
	};

	useEffect(() => {
		getTask(), getTime();
	}, []);
	if (!times || times.length === 0) return <></>;
	const l = times.map((time) => time.start);
	if (!l) return <></>;

	console.log(l);
	console.log(inputValue);
	console.log(times[0].start);
	console.log(dayjs(inputValue).isSame(dayjs(l)));
	return (
		<div>
			<div>
				<input type="date" onChange={handleInput} />
			</div>
			<div>{inputValue === l && <p>{l}</p>}</div>
		</div>
	);
};

export default Calendar;
