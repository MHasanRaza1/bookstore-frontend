import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 2000,
})

const getData = async (path)=>{
    try{
        const response = await apiClient.get(path);
        return response;
    }
    catch(err){
        return err;
    }
}

const postData = async (path, payload) => {
    const response = await apiClient.post(path, payload);
    return response;
  };

export {getData,postData};