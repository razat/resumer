import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData, deleteProfileData} from '../../actions/profileAction';
import Tags from '../Common/Tags';


const Form = ({handleSubmit, isSubmitting}) => (
        <form className="box-form" onSubmit={handleSubmit}>
          <Field type="text" className="inline-input lg-inline-input"  name="language" placeholder="Language"/>
          <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
        </form>
);


class Language extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }
  onRemove(id) {
    console.log(id);
    this.props.dispatch(deleteProfileData('languages', id));
  }
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Language</h2>
        <LanguageForm  dispatch={this.props.dispatch}/>
        <Tags items={this.props.languages} onRemove={this.onRemove} />

      </div>
    );
  }
}

const LanguageForm = withFormik({
  mapPropsToValues: props => ({
     language: ''
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    props.dispatch(setProfileData('languages', values.language));
    resetForm()
    setSubmitting(false);
  },
  validate: (values) => {
    let errors = {};
    if(!values.language) {
      errors.language = 'required';
    }
    if(values.language && values.language.length < 2){
      errors.hobby = 'Fill in valid language';
    }
    return errors;
  }
})(Form);


function mapStateProps({profile}) {
  return {
    languages:  profile.languages || []
  };
}

export default connect(mapStateProps)(Language);

