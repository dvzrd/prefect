import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

import authenticationReducer from './authentication/reducer';
import userReducer from './user/reducer';

// create redux store with redux thunk middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// create an object to combine reducers of all modules
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  form: formReducer,
});

// create store configuration to be passed into store prop of redux provider component
const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
