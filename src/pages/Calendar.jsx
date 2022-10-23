import React, { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";
const Calendar = () => {
	const [inputDateValue, setInputDateValue] = useState(null);
	const { times, getTime, getTask } = useProjects();

	return <div></div>;
};

export default Calendar;
