import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);
export const delContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');