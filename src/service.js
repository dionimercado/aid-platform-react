import axios from "axios";

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://api.yourdomain.com";

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
