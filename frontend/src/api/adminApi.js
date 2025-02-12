import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getAdminStats = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
