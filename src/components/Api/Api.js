import axios from "axios";

const API_KEY ='50952604-cafe4730095040e6a8b2a48c4';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const getImg = async (value, page = 1) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      image_type: "photo",
      key: API_KEY,
      q: value,
      per_page: 15,
      page
    },
  });
  return response.data;
};
