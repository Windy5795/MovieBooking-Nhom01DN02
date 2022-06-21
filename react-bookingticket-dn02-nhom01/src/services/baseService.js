import axios from "axios";
import { DOMAIN, TOKEN_CYBER } from "../util/setting/config";

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  axios({
            url:`${DOMAIN}/${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_CYBER)} //JWT
        }) 
    }

    post = (url,model) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_CYBER)} //JWT
        }) 
    }


    get = (url) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBER,
              } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_CYBER)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}