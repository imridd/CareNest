import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // 🔁 Update this if your Spring Boot server runs on another port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
