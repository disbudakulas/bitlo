import axios from './axios';

class MainService {
  async getMarkets() {
    return await axios.get('/market/ticker/all');
  }

  async getMarketDetail(params: {market: string; depth: number}) {
    return await axios.get(`market/orderbook`, {params});
  }
}

export default new MainService();
