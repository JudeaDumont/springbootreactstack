import axios from 'axios'

const API_URL = 'http://localhost:8080'
const ALL_OBJECTS_API_POINT = `getAllObjects`
const OBJECTS_BY_NAME_API_POINT = `getObjectsByName`

class ObjectService {

    retrieveAllObjects() {
        return axios({
            method: 'get',
            url: `${API_URL}/${ALL_OBJECTS_API_POINT}`
        });
    }
    retrieveObjectsByName(name) {
        return axios({
            method: 'get',
            url: `${API_URL}/${name}/${OBJECTS_BY_NAME_API_POINT}`
        });
    }
}

export default new ObjectService()

