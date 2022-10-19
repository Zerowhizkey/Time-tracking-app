import axios from "axios";

const URL = "http://localhost:3000";

export const getProjects = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/projects`,
	});
	// console.log(data);
	return data;
};

export const getTasks = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/tasks`,
	});
	// console.log(data);
	return data;
};

export const getTimes = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/timelogs`,
	});
	// console.log(data);
	return data;
};

export async function addProject(projectData) {
	const response = await axios.request({
		method: "post",
		url: `${URL}/projects`,
		data: projectData,
	});
	console.log(response);
	return;
}

export async function addTask(taskData) {
	const response = await axios.request({
		method: "post",
		url: `http://localhost:3000/tasks`,
		data: taskData,
	});
	// console.log(response);
	return;
}
export async function addTime(timeData) {
	const response = await axios.request({
		method: "post",
		url: `http://localhost:3000/timelogs`,
		data: timeData,
	});
	// console.log(response);
	return;
}

export async function deleteTask(id) {
	const response = await axios.request({
		method: "delete",
		url: `http://localhost:3000/tasks/${id}`,
	});
	// console.log(response)
	return;
}
export async function deleteProjects(id) {
	const response = await axios.request({
		method: "delete",
		url: `http://localhost:3000/projects/${id}`,
	});
	// console.log(response)
	return;
}
