import { DataCustomer } from "../interfaces";

export const { REACT_APP_BACKEND } = process.env;

export class EndpointRequest {
  static apiStore = REACT_APP_BACKEND;

  get(url: string) {
    const bodyOpts = {
      method: 'GET'
    };
    return fetch(`${EndpointRequest.apiStore}${url}`, bodyOpts);
  }

  post(url: string, body: object) {
    const bodyOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    return fetch(`${EndpointRequest.apiStore}${url}`, bodyOpts);
  }
  
  put(url: string, body: DataCustomer) {
    const bodyOpts = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    return fetch(`${EndpointRequest.apiStore}${url}/${body.id}`, bodyOpts);
  }

  delete(url: string, id: string) {
    const bodyOpts = {
      method: 'DELETE',
    };
    return fetch(`${EndpointRequest.apiStore}${url}/${id}`, bodyOpts);

  }



}
