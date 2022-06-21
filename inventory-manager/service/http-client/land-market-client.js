
import axios from 'axios';

import MarketClient from './market-client.js';

export default class LandMarketClient extends MarketClient {

  async findById(id) {
    return axios.get(`http://localhost:8085/land/${id}`).then(response => response.data);
  }

  async findAll() {
    return axios.get('http://localhost:8085/land').then(response => response.data);
  }

}
