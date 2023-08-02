import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.register_payment}`;

class RegisterPaymentService {
  async createRegisterPayment(formData) {
    const create = await axios.post(`${API_URL}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if (create) {
      console.log('call api create register payment -> ', create);
      return create;
    }
  }
}

export default new RegisterPaymentService();
