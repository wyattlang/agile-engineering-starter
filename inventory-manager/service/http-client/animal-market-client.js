
import axios from 'axios';

import MarketClient from './market-client.js';

export default class AnimalService extends MarketClient {

  async findById(id) {
    return axios.get(`http://localhost:8083/animal/${id}`).then(response => response.data);
  }

  async findAll() {
    return axios.get('http://localhost:8083/animal').then(response => response.data);
  }

}
