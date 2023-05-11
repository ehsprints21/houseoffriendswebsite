import axios from "axios";

// const BASE_URL = "http://localhost:4000/api/";
const BASE_URL = "https://sindrisystems.com:4000 "; // for production


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//console.log(user);

const currentUser = user && JSON.parse(user).currentUser;
//console.log(currentUser);
const TOKEN = currentUser?.accessToken;

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});

export { publicRequest, userRequest }