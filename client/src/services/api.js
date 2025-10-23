import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getTerminals = async () => {
  try {
    const response = await api.get('/api/terminals');
    return response.data;
  } catch (error) {
    console.error('Get terminals error:', error);
    throw error;
  }
};

export const searchTransportation = async (searchData) => {
  try {
    const response = await api.post('/api/search', searchData);
    return response.data;
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

export default api;