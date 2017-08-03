import axios from 'axios';
export const FETCH_CONTACTS = 'fetch_contacts';
export const SET_ESHAPES = 'set_eshapes';

export function fetchContacts() {
  const request = axios.get(`./json/contact.json`);

  return {
    type: FETCH_CONTACTS,
    payload: request
  }
}


export function setEshapes() {
  const eshapes = {
    "authority_level": "employee"
  }

  return {
    type: SET_ESHAPES,
    payload: eshapes 
  }
}
