import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
    );

