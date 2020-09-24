import axios from 'axios';
import Api from '../Api';

const apiUrl = Api.url('sessions');

const Session = {
  async createSession(token) {
    try {
      const response = await axios.post(apiUrl, { token });
      const check = Api.checkStatus(response, 'CREATE_SESSION');
      return check;
    } catch (err) {
      if (err.response) {
        const check = Api.checkStatus(err.response, 'CREATE_SESSION');
        return check;
      }
      return {
        success: false,
      };
    }
  },

  async verifySession(sessionId) {
    try {
      const response = await axios.get(`${apiUrl}/${sessionId}`);
      const check = Api.checkStatus(response, 'VERIFY_SESSION');
      return check;
    } catch (err) {
      const check = Api.checkStatus(err.response, 'VERIFY_SESSION');
      return check;
    }
  },

  async deleteSession() {
    try {
      const response = await axios.delete(apiUrl);
      const check = Api.checkStatus(response, 'DELETE_SESSION');
      return check;
    } catch (err) {
      const check = Api.checkStatus(err.response, 'DELETE_SESSION');
      return check;
    }
  },
};

export default Session;
