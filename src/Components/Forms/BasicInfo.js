import React, { Component } from 'react';
import { withFormik, Field,  } from 'formik';
import db from '../../fire';
import debounce from '../../Utility/debounce';


const Form = ({values}) => (
      <div className="box tile is-child">
      	<h2 className="form-title">Basic Info</h2>
      	<div className="box-form">
 				<p>	
 					I am <Field type="text" className="inline-input lg-inline-input" name="fullname" placeholder="Full Name"/> currently living in
 					<Field type="text" className="inline-input mid-inline-input" name="location" placeholder="Banglore"/> . I have total work experience of 
 					<Field type="number" className="inline-input sm-inline-input" name="experience" placeholder="3.5"/> Years with current CTC of 
 					<Field type="number" className="inline-input sm-inline-input" name="package" placeholder="25"/> LPA and my notice period is <Field type="number" className="inline-input xsm-inline-input" name="notice" placeholder="2"/> months.
 				</p>
 		</div>
      </div>
);


const submitChanges = debounce((props) => { console.log(props), submitToFirebase(props);}, 2050);
const submitToFirebase = (props) => {
// 	console.log(db);
// 	db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });


db.collection("User").doc("rajat").set(props).then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
const BasicInfo = withFormik({
    mapPropsToValues: props => ({
     fullname: props.fullname || '',
     location: props.location  || '',
     experience: props.experience || '',
     package: props.package || '',
     notice: props.notice  || ''
 }),
    validate: (props) => {
      submitChanges(props);
    },
})(Form);


export default BasicInfo;