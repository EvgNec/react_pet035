import axios from "axios";

const API_KEY ='50952604-cafe4730095040e6a8b2a48c4';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const getImg = async () => {
    const response = await axios.get('/?key='+API_KEY+'&q=yellow+flowers');
    return response.data;
  };

