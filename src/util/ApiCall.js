// import axios from 'axios';


// class ApiCall {
//   constructor(){
//     const instance = axios.create();
//     instance.interceptors.response.use(this.handleSuccess,this.handleErro);
//     this.instance = instance;
//   }

//   handleSuccess(response) {
//     return response;
//   }

//   handleErro(erro) {
//     return erro;
//   }

//   get(url) {
//     return this.instance.get(url);
//   }
// }

// export default new ApiCall;
import axios from 'axios';
import * as Config from '../constants/config';

export default function apicall(endpoint , method = 'Get' , body) {
    // console.log(endpoint);
    
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
        
        
      }).catch(err =>{

        console.log(err);
      });
    // console.log(axios.url);
    
}