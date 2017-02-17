import storage from '@dm/storage';

const tokenKey = 'wedis-token';
const expire = 24 * 60 * 60 * 1000;

export default {
  set(token) {
    storage.setItem(tokenKey, token, expire);
  },
  get() {
    return storage.getItem(tokenKey);
  },
  remove() {
    storage.removeItem(tokenKey);
  }
};
