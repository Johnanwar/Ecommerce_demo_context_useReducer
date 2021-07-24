import axios from "axios";
const BASE_URL = 'http://localhost:3006/'; // fake api
export const ENDPIONTS = {
   ALLPRODUCTS:"products",
   CART:"cart",
}
export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        // fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord ),
        delete: (id) => axios.delete(url + id ),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    }
}