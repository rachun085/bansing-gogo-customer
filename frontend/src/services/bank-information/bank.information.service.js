import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.bank_information}`;

class BankInformationService {
  getAll() {
    return axios.get(`${API_URL}/`);
  }

}

export default new BankInformationService();
