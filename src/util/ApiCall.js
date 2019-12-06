import axios from 'axios';


class ApiCall {
  constructor(){
    const instance = axios.create();
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleErro(erro) {
    return erro;
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new ApiCall;