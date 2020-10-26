import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasID {
  id?: number;
}

export class Sync<T extends HasID> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      //Update user
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //Create new user
      return axios.post(this.rootUrl, data);
    }
  }
}
