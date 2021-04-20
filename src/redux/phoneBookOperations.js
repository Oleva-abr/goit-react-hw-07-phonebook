import axios from 'axios';
import actions from './phoneBookAction';

axios.defaults.baseURL = `http://localhost:4141`; // baseURL

//http://localhost:4141/contacts

//Get
const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    //        const contacts = Object.keys(response.data).map(key => ({
    //    id: key,
    //    ...response.data[key],
    //  }));
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};
//AddContact
const addContact = ({ name, number }) => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts')
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
