import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://readerarea-945cc.firebaseio.com/'
});

export default instance;