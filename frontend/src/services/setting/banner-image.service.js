import axios from 'axios';
import { apiConstants } from '../../constrants/const';

const API_URL = `${apiConstants.baseURL}${apiConstants.setting}`;

class BannerImageService {
  getAllBannerImage() {
    return axios.get(`${API_URL}/banner-image/get/all/customer`);
  }
}

export default new BannerImageService();
