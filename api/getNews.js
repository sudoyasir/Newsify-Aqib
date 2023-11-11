import api from "./client";
const getNews = () => {
  return api.get(
    "top-headlines?country=us&apiKey=335a31345a5944eebd407a78852f661e"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=335a31345a5944eebd407a78852f661e`);
};
export default {
  getNews,
  searchedNews,
};
