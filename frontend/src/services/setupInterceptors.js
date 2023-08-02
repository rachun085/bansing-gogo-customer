import axiosInstance from "./api";
import TokenService from "./token.service";

const setup = (store) => {
    axiosInstance.interceptors.request.use((config) => {
        // Do something before request is sent
        const token = TokenService.getLocalAccessToken();
        if(token){
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
    );

    axiosInstance.interceptors.response.use(
        (res) => {
            // Any status code from range of 2xx
            // Do something with response data
            return res;
        },
        async (err) => {
            // Any status codes outside range of 2xx
            // Do something with response error
            const originalConfig = err.config;
            if(originalConfig.url !== "/auth/login" && err.response){
                // Access Token was expired
                if(err.response.status === 401 && !originalConfig._retry){
                    originalConfig._retry = true;

                    // Do something, call refreshToken() request for example;
                    // return a request
                    try {
                        const rs = await axiosInstance.get("/auth/refresh", {
                            headers: {
                                Authorization: `Bearer ${TokenService.getLocalRefreshToken()}`,
                            }
                        });

                        const { access_token } = rs.data;

                        store.dispatch('auth/refreshToken', access_token);
                        TokenService.updateLocalAccessToken(access_token);

                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err)
        }
    );
};

export default setup;