import axios from './axios';

class ConfigService {
  async getConfig(params: any) {
    return await axios.get('/config', {params});
  }
}

export default new ConfigService();
