import axios from 'axios';
export const LIST_CONTACTS = 'list_contacts';
export const FETCH_CONTACT = 'fetch_contact';
export const SET_ESHAPES = 'set_eshapes';
export const SAVE_SETUP = 'save_setup';
export const PROCESS_LOGIN = 'process_login';


const EXPRESS_ROOT = "http://10.51.234.243:8081/";

export function listContacts(values) {
  // const request = axios.get(`10.54.59.57:8081/json/contact.json`);
  // const request = axios.get(`/:8081/json/contact.json`);
  // const request = axios.get(`./json/contact.json`);
  // const request = axios.get(`${EXPRESS_ROOT}json/contacts.json`);
  /**
  const request = fetch(`${EXPRESS_ROOT}/json/contacts.json`).then(response => {
  // const request = fetch(`./json/contact.json`).then(response => {
    return response.json();
  }).then(data => {
    return data
  }).catch(error => {
    console.log(`Error: ${error}`);
  });
  */
  // const request = fetch(`./json/contact.json`);
/**
  return {
    type: FETCH_CONTACT,
    payload: request
  }
  */

  /**
  return fetch(`${EXPRESS_ROOT}json/contacts.json`).then((request) => {
      // callback to go to next screen
     // callback();
     console.log('returned from listContacts action');
     console.log(JSON.stringify(request));
     return {
       type: LIST_CONTACTS,
       payload: request
     }
   });
   */
  const request = axios.get(`${EXPRESS_ROOT}json/contacts.json`);
  return {
    type: LIST_CONTACTS,
    payload: request
  }
}

export function fetchContact(id) {
  // const request = axios.get(`10.54.59.57:8081/json/contact.json`);
  // const request = axios.get(`/:8081/json/contact.json`);
  // const request = axios.get(`./json/contact.json`);
  // console.log(`receiving id: ${id}`);
  // id = '986128';
  // console.log(`getting contact: ${id}`);
  const request = fetch(`${EXPRESS_ROOT}json/contacts/${id}.json`).then(response => {
  // const request = fetch(`${EXPRESS_ROOT}/json/contact1.json`).then(response => {
  // const request = fetch(`./json/contact.json`).then(response => {
    return response.json();
  }).then(data => {
    return data
  }).catch(error => {
    console.log(`Error: ${error}`);
  });
  // const request = fetch(`./json/contact.json`);

  return {
    type: FETCH_CONTACT,
    payload: request
  }
}


export function processLogin(values, callback) {
  console.log(`action process login: ${JSON.stringify(values)}`);
  const eshapes = {
    "authority_level": values.authority_level,
    "username": values.username,
    "login": true
  }
  console.log(`Eshapes after login: ${JSON.stringify(eshapes)}`);
  callback();
  return {
    type: PROCESS_LOGIN,
    payload: eshapes
  }
}



export function setEshapes(values, callback) {
  console.log(`action set eshapes: ${JSON.stringify(values)}`);
  let eshapes = {
    "authority_level": values ? values.authority_level : "management",
    "username": values ? values.username : 'not logged in',
    "login": values ? true : false
  }
  console.log(`Eshapes after login: ${JSON.stringify(eshapes)}`);
  if (callback)
    callback();
  return {
    type: SET_ESHAPES,
    payload: eshapes
  }
}

// export function saveSetup(values) {
export function saveSetup(values, callback) {
  console.log(`VALUES, saveSetup function: ${JSON.stringify(values)}`);
  let values1 = {
    firstName: "Randy",
    lastName: "Newman"
  }
  console.log(`VALUES1, saveSetup function: ${JSON.stringify(values1)}`);
  let fetch_request = {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept":"application/json"
    }),
    mode: 'cors',
    body: JSON.stringify(values)
  }
  // const request = axios.post(`${EXPRESS_ROOT}saveSetup`, values);
  /**
  // the following doesn't work
  // console message: Actions must be plain objects. Use custom middleware for async actions.
  fetch(`${EXPRESS_ROOT}saveSetup`, fetch_request).then(request => {
     return request;
   }).then(request => {
     return {
       type: SAVE_SETTUP,
       payload: request
     }
   });
  */
   return fetch(`${EXPRESS_ROOT}saveSetup`, fetch_request).then((request) => {
       // callback to go to next screen
      // callback();
      console.log('returned from fetch');
      return {
        type: SAVE_SETUP,
        payload: request
      }
    });
}
