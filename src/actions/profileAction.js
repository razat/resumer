import db from '../Utility/fire';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
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

// Update user profile data
export const setProfileData = (section, data) => (dispatch, getState) => {
	const authUser = {userId : 'raz123'}; //getState().authUser;
	switch(section) {
		case 'hobbies' : 
			const hobbies = getState().profile.hobbies || [];
			const newHobbies = [...hobbies, data];
			dispatch(setProfileSection(section, data));
			saveProfileData(authUser.userId, section, newHobbies);
			break;

		case 'languages': 
			const languages = getState().profile.languages || [];
			const newLanguage = [...languages, data];
			dispatch(setProfileSection(section, data));
			saveProfileData(authUser.userId, section, newLanguage);
			break;

		case 'skills':
		    const skills = getState().profile.skills || [];
		    const newSkill = [...skills, data];
		    dispatch(setProfileSection(section, data));
		    saveProfileData(authUser.userId, section, newSkill);
		    break;

		case 'reference': 
		    const reference = getState().profile.reference || [];
		    const newReference = [...reference, data];
		    dispatch(setProfileSection(section, data));
		    saveProfileData(authUser.userId, section, newReference);
		    break;
		case 'education':
		    const education = getState().profile.education || [];
		    const newEducation = [...education, data];
		    dispatch(setProfileSection(section, data));
		    saveProfileData(authUser.userId, section, newEducation);		    
            break;
        case 'workEx':
		    const workEx = getState().profile.workEx || [];
		    const newWorkEx = [...workEx, data];
		    dispatch(setProfileSection(section, data));
		    saveProfileData(authUser.userId, section, newWorkEx);	
		    break;	    


		default: 
			saveProfileData(authUser.userId, section, data, () => { 
				dispatch(setProfileSection(section, data));
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

function setProfileSection(section, data) {
	return {
		type: UPDATE_PROFILE,
		section,
		data
	}
}