import firebase from 'firebase'
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */

};
const fire = firebase.initializeApp(config);
const db  = firebase.firestore(fire);
export default db;