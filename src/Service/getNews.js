import axios from "axios";

export function getNews(category = 'General') {
  const API_Key =`4c58078398b648e89ac281dd52674874`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

  // Make sure there's no space between `apiKey` and the equal sign
  return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
   
}
