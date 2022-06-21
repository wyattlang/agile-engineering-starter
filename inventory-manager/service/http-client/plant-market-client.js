
import axios from 'axios';

import MarketClient from './market-client.js';

export default class PlantMarketClient extends MarketClient {

  async findById(id) {
    return axios.get(`http://localhost:8084/plant/${id}`).then(response => response.data);
  }

  async findAll() {
    return axios.get('http://localhost:8084/plant').then(response => response.data);
  }

}
