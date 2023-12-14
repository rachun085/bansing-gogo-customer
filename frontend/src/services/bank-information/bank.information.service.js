import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `/api/${apiConstants.bank_information}`;

class BankInformationService {
  getAll() {
    return axios.get(`${API_URL}/get/all/customer`);
  }

}

export default new BankInformationService();
