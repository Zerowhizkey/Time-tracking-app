import axios from "axios";

const URL = "http://10.24.200.173:3000";

export const getUsers = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/users`,
	});
	// console.log(data);
	return data;
};

export const addUser = async (userData) => {
	const response = await axios.request({
		method: "post",
		url: `${URL}/users`,
		data: userData,
	});
	// console.log(response);
	return response.data;
};

export const deleteUser = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${URL}/users/${id}`,
	});
	console.log(response);
	return response.status === 200;
};

export const getProjects = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/projects`,
	});
	// console.log(data);
	return data;
};

export const addProject = async (projectData) => {
	const response = await axios.request({
		method: "post",
		url: `${URL}/projects`,
		data: projectData,
	});
	// console.log(response);
	return response.data;
};

export const deleteProject = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${URL}/projects/${id}`,
	});
	console.log(response);
	return response.status === 200;
};

export const getTasks = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/tasks`,
	});
	// console.log(data);
	return data;
};

export const addTask = async (taskData) => {
	const response = await axios.request({
		method: "post",
		url: `${URL}/tasks`,
		data: taskData,
	});
	// console.log(response);
	return response.data;
};

export const deleteTask = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${URL}/tasks/${id}`,
	});
	// console.log(response)
	return response.status === 200;
};

export const getTimes = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/timelogs`,
	});
	// console.log(data);
	return data;
};

export const addTime = async (timeData) => {
	const response = await axios.request({
		method: "post",
		url: `${URL}/timelogs`,
		data: timeData,
	});
	// console.log(response);
	return response.data;
};

export const deleteTime = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${URL}/timelogs/${id}`,
	});
	// console.log(response)
	return response.status === 200;
};

export const updateTime = async (id, timeData) => {
	const response = await axios.request({
		method: "patch",
		url: `${URL}/timelogs/${id}`,
		data: timeData,
	});
	// console.log(response);
	return response.data;
};
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// const validRoutes = ['projects', 'tasks', 'timelogs'];

// function createApiHandler(route) {
//     if (!validRoutes.includes(route)) {
//         throw `Invalid route: ${route}, valid routes are ${validRoutes
//             .map((r) => `"${r}"`)
//             .join(' | ')}`;
//     }

//     const url = `${API_BASE_URL}/${route}`;

//     return {
//         async get() {
//             const res = await axios.get(url);
//             return res.data;
//         },
//         async post(data) {
//             const res = await axios.post(url, { data });
//             return res.data;
//         },
//         async patch(data) {
//             const res = await axios.patch(url, { data });
//             return res.data;
//         },
//         async delete(id) {
//             const res = await axios.delete(`${url}/${id}`);
//             return res.status === 200;
//         },
//     };
// }

// const api = {
//     projects: createApiHandler('projects'),
//     tasks: createApiHandler('tasks'),
//     timelogs: createApiHandler('timelogs'),
// };

// export default api;
