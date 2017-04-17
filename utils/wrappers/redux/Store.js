import { createStore } from 'redux';

class Store {
  constructor(...args) {
    return createStore(...args);
  }
}

export default Store;
