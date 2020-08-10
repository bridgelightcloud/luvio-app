import axios from 'axios';
import util from '../utilities';

const apiUrl = util.Api.url('accounts');

const Account = {
  async create(data) {
    try {
      const response = await axios.post(apiUrl, data);
      return util.Api.checkStatus(response, 'CREATE_ACCOUNT');
    } catch (err) {
      if (err.response) {
        return util.Api.checkStatus(err.response, 'CREATE_ACCOUNT');
      }
      return err;
    }
  },

  async lookup(email) {
    try {
      const response = await axios.get(`${apiUrl}/lookup/${email}`);
      return util.Api.checkStatus(response, 'LOOKUP_ACCOUNT');
    } catch (err) {
      if (err.response) {
        return util.Api.checkStatus(err.response, 'LOOKUP_ACCOUNT');
      }
      return err;
    }
  },

  async search(data) {
    try {
      const url = util.Api.addQuery(apiUrl, data);
      console.log(url);
      const response = await axios.get(url);
      return util.Api.checkStatus(response, 'SEARCH_ACCOUNTS');
    } catch (err) {
      if (err.response) {
        console.log('error');
        return util.Api.checkStatus(err.response, 'SEARCH_ACCOUNTS');
      }
      return err;
    }
  },
};

export default Account;
