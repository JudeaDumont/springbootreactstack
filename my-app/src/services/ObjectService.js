import axios from 'axios'

const API_URL = 'http://localhost:8080'
const ALL_OBJECTS_API_POINT = `getAllObjects`
const OBJECTS_BY_NAME_API_POINT = `getObjectsByName`
const SAVE_OBJECT_API_POINT = `saveObject`
const DELETE_OBJECT_API_POINT = `deleteObject`

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
    SaveObject(object) {
        return axios({
            method: 'post',
            url: `${API_URL}/${SAVE_OBJECT_API_POINT}`,
            data: object
        });
    }

    DeleteObject(id) {
        return axios({
            method: 'delete',
            url: `${API_URL}/${id}/${DELETE_OBJECT_API_POINT}`
        });
    }
}

export default new ObjectService()

