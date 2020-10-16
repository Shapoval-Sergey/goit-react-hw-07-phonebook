import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');
const removeContacts = createAction('contacts/removeContact');

const changeFilterRequest = createAction('contacts/changeFilterRequest');
const changeFilterSuccess = createAction('contacts/changeFilterSuccess');
const changeFilterError = createAction('contacts/changeFilterError');
const changeFilter = createAction('contacts/changeFilter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContacts,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  changeFilterRequest,
  changeFilterSuccess,
  changeFilterError,
};
