import axios from 'axios';
import { apiConstants } from '../constrants/const';
import TokenService from "./token.service";

const baseURL = apiConstants.baseURL;
const loginURL = apiConstants.login;
const registerURL = apiConstants.register

class AuthService {
  async login(user) {
    const loginAxios =  axios.create();
    return loginAxios.post(`/api/${loginURL}`, {
        email: user.email,
        password: user.password
      })
      .then(response => {
        // console.log("data : ", response.data);
        if (response.data.access_token) {
          // localStorage.setItem('user', JSON.stringify(response.data));
          TokenService.setUser(response.data)
        }

        return response.data;
      })
  }

  logout() {
    // localStorage.removeItem('user');
    TokenService.removeUser();
  }

  async register(user) {
    const uninterceptedAxiosInstance = axios.create();
    const callApiRegister = await uninterceptedAxiosInstance.post(`/api/auth/register`,user)
    if(callApiRegister){
        console.log("call api register -> ", callApiRegister.data);
        return callApiRegister.data;
    }
    // return axios.post(`${baseURL}${registerURL}`,user)
    // .then(response => {
    //     if(response.data.status == "success"){
    //         console.log("ressponsee => ", response.data);
    //         console.log("registered success");
    //     }
    // })
  }
}

export default new AuthService();