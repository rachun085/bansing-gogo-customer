import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `/api/${apiConstants.document}`;

class DocumentService {
  async addContractToDocument(payload) {
    return axios.put(`${API_URL}/add-sign-contract`, payload);
  }
}

export default new DocumentService();