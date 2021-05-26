import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://anywhere-fitness-2021.herokuapp.com/api'
    });
}

export default axiosWithAuth;