import db from '../Utility/fire';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const ADD_TO_PROFILE = 'ADD_TO_PROFILE';
export const DELETE_FROM_PROFILE = 'DELETE_FROM_PROFILE';
const userRef = db.collection('User');


// Fetch existing user profile data
export const getProfileData = (userId) => (dispatch, getState) => {
	const authUser = {userId : 'raz123'}; //getState().authUser;
	userRef.doc(authUser.userId).get().then((doc) => {
		const userData = doc.data();
		dispatch(receiveProfile(userData));
	}).catch((err) => {
		console.log(err);
	})
}



export const deleteProfileData = (section, index) => (dispatch, getState) => {
	const authUser = {userId : 'raz123'}; //getState().authUser;
	const sectionData = getState().profile[section] || [];
	const newData = sectionData.slice(0, index).concat(sectionData.slice(index + 1));
	dispatch(deleteProfileSectionData(section, index));
	saveProfileData(authUser.userId, section, newData);	

}


// Update user profile data
export const setProfileData = (section, data) => (dispatch, getState) => {
	const authUser = {userId : 'raz123'}; //getState().authUser;
	switch(section) {
		case 'hobbies' : 
		case 'languages': 
		case 'skills':
		case 'reference': 
		case 'education':
        case 'workEx':
		case 'certifications':
		    const sectionData = getState().profile[section] || [];
		    const newData = [...sectionData, data];
		    dispatch(addToProfileSection(section, data));
		    saveProfileData(authUser.userId, section, newData);	
		    break;


		default: 
			saveProfileData(authUser.userId, section, data, () => { 
				dispatch(addToProfileSection(section, data));
			});
	}
}


// Save profile data to firebase
function saveProfileData(userId, section, data, cb) {
	userRef.doc(userId).set({[section]: data}, {merge: true}).then((status) => {
		console.log(status);
		cb && cb();
	}).catch((err) => {
		console.log(err);
	})

}

function receiveProfile(data) {
	return {
		type: RECEIVE_PROFILE,
		profile: data
	}
}

function addToProfileSection(section, data) {
	return {
		type: ADD_TO_PROFILE,
		section,
		data
	}
}

function deleteProfileSectionData(section, index) {
	return {
		type: DELETE_FROM_PROFILE,
		section,
		index
	}
}