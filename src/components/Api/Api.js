import axios from "axios";

const API_KEY ='50952604-cafe4730095040e6a8b2a48c4';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const getImg = async (value, page = 1) => {
console.log("🚀 ~ getImg ~ value:", value)

  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: value,
      per_page: 12,
      page
    },
  });
  return response.data;
};

// export const getImg = async (value) => {

//   const response = 
//   // await axios.get(`/?key='+${API_KEY}+'&q='+${value}`);
//   await axios ({
//     method: 'get',
//     url: 'https://pixabay.com/api',
//     data: {
//       `${value}`
//     }
// })

//   return response.data;
// };