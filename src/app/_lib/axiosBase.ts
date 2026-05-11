import axios from "axios";

const instance = axios.create({
    baseURL: "https://kxlsx-converter-cscdh2ajdsgqg9dj.westus2-01.azurewebsites.net"
});

export default instance;