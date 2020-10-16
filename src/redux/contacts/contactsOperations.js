import axios from 'axios';

import contactsActions from './contactsActions';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('http://localhost:5555/contacts', { name, number })
    .then(res => {
      dispatch(contactsActions.addContactSuccess(res.data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('http://localhost:5555/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

export default {
  addContact,
  fetchContacts,
};
