import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.company}`;

class CompanyService {
  async getAllCompany() {
    return axios.get(`${API_URL}/get/all`).then(
        response => {
            if(response.data) {
                localStorage.setItem("company", JSON.stringify(response.data));
            }
        }
    )
  }
  getEventByCompany(companyId) {
    return axios.get(`${API_URL}/get/${companyId}`);
  }

  getEventByCompanyName(companyName) {
    return axios.get(`${API_URL}/get/url-name/${companyName}`);
  }

}

export default new CompanyService();