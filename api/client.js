import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

export default api;
