import axios from 'axios';
import util from '../utilities';

const apiPath = [
  // process.env.API_HOST ||  'https://tipper.seannyphoenix.com',
  process.env.API_HOST_DEV || 'http://10.0.0.188:8080',
  process.env.API_PATH || '/api/v1',
  '/sessions',
].join('');

const Session = {
  async createSession(token) {
    try {
      const response = await axios.post(apiPath, { token });
      const check = util.Api.checkStatus(response, 'CREATE_SESSION');
      return check;
    } catch (err) {
      if (err.response) {
        const check = util.Api.checkStatus(err.response, 'CREATE_SESSION');
        return check;
      }
      console.log(err);
      return { success: false };
    }
  },
};

export default Session;
