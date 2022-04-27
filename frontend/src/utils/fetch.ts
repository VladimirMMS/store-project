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
    return fetch(`${EndpointRequest.apiStore}${url}`, bodyOpts)
  }
}
