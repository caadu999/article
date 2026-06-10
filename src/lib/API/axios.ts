import axios from "axios";

export const APIURL = axios.create({
  baseURL: process.env.API_URL,
});
