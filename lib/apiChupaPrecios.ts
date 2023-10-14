import axios from 'axios';

const ApiChupaPrecios = axios.create({
    baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
});

export default ApiChupaPrecios;
