import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.event}`;

class EventService {
  async getEventByURL(eventURL) {
    return axios.get(`${API_URL}/get/url-name/${eventURL}`);
  }
  getEventByCompany(companyId) {
    return axios.get(`${API_URL}/get/${companyId}`);
  }

}

export default new EventService();