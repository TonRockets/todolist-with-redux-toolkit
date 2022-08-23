import http from '../configs/http';

export const getUsers = () => http.get('/users');
export const getTasks = () => http.get('/todos');
export const getUsersTasks = (id) => http.get(`todos?userId=${id}`);
