import axios from 'axios';
import actions from './phoneBookAction';

axios.defaults.baseURL = `http://localhost:4141`; // baseURL

//http://localhost:4141/contacts

//Get
const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')

    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};
//AddContact
const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

//Delete contact
const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export default { fetchContacts, addContact, deleteContact };
