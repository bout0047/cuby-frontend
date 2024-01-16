import { writable } from 'svelte/store';

// Initial session data
const initialSessionData = {
  loggedIn: false,
  userToken: ''
};

const sessionStore = writable(initialSessionData);

export default sessionStore;
