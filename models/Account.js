import axios from 'axios';

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
