import axios from "axios";
// const baseUrl = "http://localhost:3001/persons";
const baseUrl = "https://fierce-dawn-31208.herokuapp.com/api/persons";

const getPhones = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const addItem = (pers) => {
  const request = axios.post(baseUrl, pers);
  return request.then((resp) => resp.data);
};

const deleteItem = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((resp) => resp.data);
};

export default { getPhones, deleteItem, addItem };
