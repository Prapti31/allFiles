
import httpClient from "../http-common";

const get = id => {
    return httpClient.get(`/userprofile/${id}`);
}
const create = data => {
    return httpClient.post("/userprofile/saveuserjob", data);
}
const getAll = () => {
    return httpClient.get('/user/seeallusers');
}

export default {get,create};