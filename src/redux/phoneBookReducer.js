import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phoneBookAction';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};
const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => [...payload],
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const onError = (_, { payload }) => payload;
const loading = createReducer(false, {
  //get
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  //add contact
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  //delete contact
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(initialState.error, {
  [actions.fetchContactsError]: onError,
  [actions.addContactError]: onError,
  [actions.deleteContactError]: onError,
  [actions.clearError]: () => null,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
