import axios from "axios";

export const api = axios.create({
  // baseURL: "https://dt-money-api-wo19.onrender.com/",
  baseURL: "http://localhost:3333/",
});