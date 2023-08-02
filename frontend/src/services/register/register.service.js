import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.register}`;

class RegisterService {
  getRegisterById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  async createRegister(registerEvent) {
    const callApi = await axios.post(`${API_URL}`, registerEvent);
    if (callApi) {
      console.log('call api register event -> ', callApi.data);
      return callApi.data;
    }
  }

  getRegisterByUserId(userId) {
    return axios.get(`${API_URL}/user/${userId}`);
  }

  getRegisterWithContractByUserId(userId) {
    return axios.get(`${API_URL}/contract/${userId}`);
  }
}

export default new RegisterService();
