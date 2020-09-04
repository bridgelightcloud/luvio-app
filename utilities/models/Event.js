import axios from 'axios';
import Api from '../Api';

const apiUrl = Api.url('events');

const Event = {
  async create(data) {
    try {
      const response = await axios.post(apiUrl, data);
      return Api.checkStatus(response, 'CREATE_EVENT');
    } catch (err) {
      if (err.response) {
        return Api.checkStatus(err.response, 'CREATE_EVENT');
      }
      return err;
    }
  },

  async lookup(eventId) {
    try {
      const response = await axios.get(`${apiUrl}/${eventId}`);
      return Api.checkStatus(response, 'LOOKUP_EVENT');
    } catch (err) {
      if (err.response) {
        return Api.checkStatus(err.response, 'LOOKUP_EVENT');
      }
      return err;
    }
  },

  async search(data) {
    try {
      const url = Api.addQuery(apiUrl, data);
      const response = await axios.get(url);
      return Api.checkStatus(response, 'SEARCH_EVENTS');
    } catch (err) {
      if (err.response) {
        return Api.checkStatus(err.response, 'SEARCH_EVENTS');
      }
      console.error(err);
      return err;
    }
  },
};

export default Event;
