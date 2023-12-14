import axios from 'axios';
import authHeader from './auth-header';
import { apiConstants } from '../constrants/const';

// const API_URL = `${apiConstants.baseURL}/${apiConstants.user}`;
const API_URL = '/api/user'

class UserService {
  getAllUser() {
    return axios.get(`${API_URL}/get/all`);
  }
  getUserById() {
    return axios.get(`${API_URL}/`);
  }

  getUserProfile(userId) {
    return axios.get(`${API_URL}/${userId}`);
  }

  updateUserProfile(user){
    return axios.put(`${API_URL}/profile`, user);
  }

  validateContractPassword(payload){
    return axios.post(`${API_URL}/validate-contract-password`, payload);
  }
}

export default new UserService();