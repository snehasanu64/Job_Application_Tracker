import axios from "axios";

const API_URL = "/api/jobs";

export const getJobs = () => axios.get(API_URL);
export const addJob = (jobData) => axios.post(API_URL, jobData);
export const updateJob = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);
export const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);
