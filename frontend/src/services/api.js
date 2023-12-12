import axios from "axios";

const instance = axios.create({
  baseURL: '10.104.8.251:4000',
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;