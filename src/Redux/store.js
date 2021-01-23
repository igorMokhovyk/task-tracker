import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tasks from './reducer';

const store = createStore(tasks, composeWithDevTools(
  applyMiddleware(),
));

export default store;
