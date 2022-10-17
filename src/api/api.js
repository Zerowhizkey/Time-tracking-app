import axios from "axios";

const URL = "http://192.168.1.86:3000";

export const getProducts = async () => {
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
	console.log(data);
	return data;
};

export const getTimes = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${URL}/timelogs`,
	});
	console.log(data);
	return data;
};
