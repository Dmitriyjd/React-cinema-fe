import requests from '../ApiService/requests';
import AuthEndpoints from './AuthEndpoints';


export function login(data) {
  return requests(AuthEndpoints.login.url, AuthEndpoints.login.method, data);
}

export function register(data) {
  return requests(AuthEndpoints.register.url, AuthEndpoints.register.method, data);
}
