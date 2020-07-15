import Axios from 'axios';
import util from '../utilities';

const apiUrl = util.Api.url('tokens');

const Token = {
  async sendMagicLink(email) {
    try {
      const response = await Axios.post(apiUrl, { email });
      const check = util.Api.checkStatus(response, 'SEND_MAGIC_LINK');
      return check;
    } catch (err) {
      if (err.response) {
        const check = util.Api.checkStatus(err.response, 'SEND_MAGIC_LINK');
        return check;
      }
      return { success: false };
    }
  },
};

export default Token;
