import axios from 'axios'

const API_URL = 'http://localhost:8080'
const SOME_OBJECT_NAME_API_POINT = `/getmeobjects/`

class SomeObjectService {

    retrieveAllSomeObjects(name) {
        return axios.get(`${API_URL}/${name}/${SOME_OBJECT_NAME_API_POINT}`);
    }
}

export default new SomeObjectService()

