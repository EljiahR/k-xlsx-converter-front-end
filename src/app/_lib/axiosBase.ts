import axios from "axios";

const instance = axios.create({
    baseURL: "https://kxlsxconverterapi.onrender.com"
});

export default instance;