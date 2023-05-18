const API_KEY = "56f07a3a984946ecba852de35f3a7840";


const getApi = async (API) => {

const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-05-18&sortBy=popularity&apiKey=${API}`);

console.log(newsApi.data);


}

getApi(API_KEY);