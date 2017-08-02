import axios from 'axios';
export const FETCH_CONTACTS = 'fetch_contacts';

export function fetchContacts() {
  const request = axios.get(`./json/contact.json`);

  return {
    type: FETCH_CONTACTS,
    payload: request
  }
}
