import api from "./client";

//api to get news on homescreen
const getNews = () => {
  return api.get(
    "top-headlines?country=us&apiKey=335a31345a5944eebd407a78852f661e"
  );
};

//api to get searched news
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=335a31345a5944eebd407a78852f661e`);
};

//exporting apis
export default {
  getNews,
  searchedNews,
};
