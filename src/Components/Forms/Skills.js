import React, { Component } from 'react';
import Rating from 'react-rating';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';
import Tags from '../Common/Tags';



const Form = ({values, handleSubmit, isSubmitting}) => (
        <form className="box-form" onSubmit={handleSubmit}>
          <Field type="text" className="inline-input lg-inline-input"  name="skill" placeholder="Skill Name"/>
          <Rating  emptySymbol="far fa-star" fullSymbol="fas fa-star"  name='rating' onChange={(e) => { values.rating = e; }}/>
          <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
        </form>
);


class Skills extends Component {
  componentDidMount() {
    console.log(this.props.skills);
  }
  onRemove(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Skills</h2>
        <SkillForm dispatch={this.props.dispatch} />
        <Tags items={this.props.skills} onRemove={this.onRemove} />
      </div>
    );
  }
}

const SkillForm = withFormik({
  mapPropsToValues: props => ({
     skill: '',
     rating: null
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    const skill = {name: values.skill, rating: values.rating};
    setSubmitting(true);
    props.dispatch(setProfileData('skills', skill));
    resetForm()
    setSubmitting(false);
  },
  validate: (values) => {
    let errors = {};
    if(!values.skill) {
      errors.hobby = 'required';
    }
    if(values.skill && values.skill.length < 3){
      errors.hobby = 'Fill in valid skill';
    }
    return errors;
  }
})(Form);


function mapStateProps({profile}) {
  return {
    skills:  profile.skills || []
  };
}

export default connect(mapStateProps)(Skills);