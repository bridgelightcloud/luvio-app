import axios from 'axios';

const tipperAPI = axios.create({
  baseURL: 'https://tipper.seannyphoenix.com/api/v1/',
  timeout: 1000,
});

export default class Account {
  static async test() {
    try {
      const res = await axios.get('https://tipper.seannyphoenix.com');
      return res.data;
    } catch (err) {
      return err;
    }
  }
}
