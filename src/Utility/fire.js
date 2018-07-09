import firebase from 'firebase'
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */

};

const settings = {
	timestampsInSnapshots: true
};
const fire = firebase.initializeApp(config);
const db = firebase.firestore(fire);
db.settings(settings);
export default db;