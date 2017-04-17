import Store from '../../utils/wrappers/redux/Store';
import reducers from '../reducers';

const store = new Store(reducers);
export default store;
