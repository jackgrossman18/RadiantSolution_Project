import { UPDATE_TEAMS } from "./actionTypes";

const singleton = Symbol();
const singletonEnforcer = Symbol();

class Worker {
  constructor() {
    if (enforcer !== singletonEnforcer) {
      throw new Error("cannot construct singleton");
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Worker(singletonEnforcer);
    }
    return this[singleton];
  }

  init(store) {
    this._store = store;
  }
}
