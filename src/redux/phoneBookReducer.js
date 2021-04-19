import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phoneBookAction';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: removeContact,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
