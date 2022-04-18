import { AnyAction, createStore, EmptyObject, Store } from 'redux';
import { reducer } from '../reducers';

export const store: Store<EmptyObject, AnyAction> = createStore(reducer);
store.subscribe(() => console.log(store));
