import axios from 'axios';
import util from '../utilities';

const apiUrl = util.Api.url('events');

const Event = {
  async create(data) {
    try {
      const response = await axios.post(apiUrl, data);
      return util.Api.checkStatus(response, 'CREATE_EVENT');
    } catch (err) {
      if (err.response) {
        return util.Api.checkStatus(err.response, 'CREATE_EVENT');
      }
      return err;
    }
  },

  async lookup(eventId) {
    try {
      const response = await axios.get(`${apiUrl}/${eventId}`);
      return util.Api.checkStatus(response, 'LOOKUP_EVENT');
    } catch (err) {
      if (err.response) {
        return util.Api.checkStatus(err.response, 'LOOKUP_EVENT');
      }
      return err;
    }
  },

  async search(data) {
    try {
      const url = util.Api.addQuery(apiUrl, data);
      const response = await axios.get(url);
      return util.Api.checkStatus(response, 'SEARCH_EVENTS');
    } catch (err) {
      if (err.response) {
        return util.Api.checkStatus(err.response, 'SEARCH_EVENTS');
      }
      console.error(err);
      return err;
    }
  },
};

export default Event;
