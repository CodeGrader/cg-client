class Action {
  constructor(type, payload, error=false) {
    return { type, payload, error };
  }
}

export default Action;
