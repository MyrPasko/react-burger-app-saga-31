import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-bb7f6.firebaseio.com/',
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

export default instance;