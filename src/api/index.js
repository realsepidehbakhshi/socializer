import axios from "axios";

const url = "https://socializer-latest.onrender.com/socializer";

axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  url,
};
