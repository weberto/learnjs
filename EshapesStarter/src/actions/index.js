import axios from 'axios';
export const FETCH_CONTACTS = 'fetch_contacts';
export const SET_ESHAPES = 'set_eshapes';
export const SAVE_SETTUP = 'save_settup';


const EXPRESS_ROOT = "http://10.54.59.57:8081/";

export function fetchContacts() {
  // const request = axios.get(`10.54.59.57:8081/json/contact.json`);
  // const request = axios.get(`/:8081/json/contact.json`);
  // const request = axios.get(`./json/contact.json`);

  const request = fetch(`${EXPRESS_ROOT}/json/contact1.json`).then(response => {
  // const request = fetch(`./json/contact.json`).then(response => {
    return response.json();
  }).then(data => {
    return data
  }).catch(error => {
    console.log(`Error: ${error}`);
  });
  // const request = fetch(`./json/contact.json`);

  return {
    type: FETCH_CONTACTS,
    payload: request
  }
}


export function setEshapes() {
  const eshapes = {
    "authority_level": "employee",
    "login": true
  }

  return {
    type: SET_ESHAPES,
    payload: eshapes
  }
}

export function saveSettup(values) {
  let values1 = {
    firstName: "Randy",
    lastName: "Newman"
  }
  const request = axios.post(`${EXPRESS_ROOT}/saveSetup`, values1);

  return {
    type: SAVE_SETTUP,
    payload: request
  }
}
