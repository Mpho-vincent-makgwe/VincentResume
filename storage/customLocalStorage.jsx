// customLocalStorage.js

let storage = {};

export const customLocalStorage = {
  getItem(key) {
    return storage[key] || null;
  },

  setItem(key, value) {
    storage[key] = value;
  },

  removeItem(key) {
    delete storage[key];
  },
};
