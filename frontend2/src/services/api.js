import axios from 'axios';

// Create an axios instance
const apiClient = axios.create({
    baseURL: 'https://localhost:5000', // YARP proxy URL
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

// Example API functions
export const fetchData = async () => {
    try {
        const response = await apiClient.get('/api/home');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await apiClient.post('/api/home', data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};