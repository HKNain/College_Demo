import axios from "axios";

    export  const api = axios.create({
        baseURL: 'https://college-demo-backend.onrender.com',
        timeout: 10000,
        withCredentials: true 
    });


