import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // Your Laravel API base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add request interceptor for auth tokens if needed
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // Form Submission Endpoints
  getSubmissions() {
    return API.get('/form-submissions');
  },
  getSubmission(id) {
    return API.get(`/form-submissions/${id}`);
  },
  createSubmission(data) {
    return API.post('/form-submissions', data);
  },
  updateSubmission(id, data) {
    return API.put(`/form-submissions/${id}`, data);
  },
  deleteSubmission(id) {
    return API.delete(`/form-submissions/${id}`);
  },
};
