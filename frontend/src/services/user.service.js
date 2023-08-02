import axios from 'axios';
import authHeader from './auth-header';
import { apiConstants } from '../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.user}`;

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

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new UserService();