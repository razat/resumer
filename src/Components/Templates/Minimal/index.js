import React, { Component } from 'react';
import { connect } from 'react-redux'
import './minimal.css';


const Minimal = ({basicInfo, summary, personalInfo, workEx, education, skills}) => (
			<div className="resume-content">
			    <h1 className="title is-1 text-center"> 
			        {basicInfo.fullname}
                </h1>
                <h3 className="subtitle text-center">{basicInfo.profession}</h3>
                <hr />
                <div className="columns is-multiline">
	  			   <div className="column is-half">
	  			           <h2 className="section-title">About</h2>
                            <p>{summary.workSummary}</p>
		      	   </div>
	    		   <div className="column is-half">
	    		        <h2 className="section-title">Contact</h2>
                        <p>Mobile number: {personalInfo.mobile}</p>
                        <p>Email Id: {personalInfo.email}</p>
                        <p>{personalInfo.twitterUsername ? "Twitter: " + personalInfo.twitterUsername : "" }</p>
                        <p>{personalInfo.githubUsername ? "Github: " + personalInfo.githubUsername : "" }</p>
                        <p>{personalInfo.myWebsite ? "Website: " + personalInfo.myWebsite : "" }</p>

	   	    	   </div>      
	   	           <div className="column is-12">
	  		               <h2 className="section-title">Experience</h2>
	  		               <div className="columns is-variable is-multiline">
                            {workEx.map((work, id) => {
                                const startDate = new Date(work.startDate).getFullYear();
                                const endDate = new Date(work.endDate).getFullYear();
                                return (
                                    <div className="column is-6 job-section" key={id}>
                                        <h3 className="job-title">{work.designation}</h3>
                                        <span className="company-name"> {work.company}, {work.location} ({startDate} - {work.isPresent ? 'Present' : endDate})</span>
                                        <div className="text-section">{work.description}</div>
                                    </div>   
                                    )
                            })}
                            </div>
                   </div>
                   <div className="column is-6">
                    	<h2 className="section-title">Education</h2>
                        {education.map((edu, id) => {
                        	return(
                                <div className="columns" key={id}>
                                    <div className="column is-3">
                                        <span>{edu.year}</span>
                                    </div>
                                    <div className="column is-8">
                                        <span>{edu.degree}, {edu.subject}</span>
                                        <p>{edu.school}, {edu.location}</p>
                                    </div>
                                </div>
                        	)
                        })}
                   </div>
                   <div className="column is-6">
                        <h2 className="section-title">Skills</h2>
                        <ul className="skill-list">
                            {skills.map((skill, id) => {
                                return(
                                    <li key={id}>{skill.name}</li>
                                )
                            })}
                        </ul>
                 </div>
	            </div>
	        </div>

	    );


function mapStateProps({profile}) {
	return {
		basicInfo: profile.basicInfo || {},
		certifications: profile.certifications || [],
		education: profile.education || [],
		hobbies: profile.hobbies || [],
		languages: profile.languages || [],
		skills: profile.skills || [],
		personalInfo: profile.personalInfo || {},
		workEx: profile.workEx || [],
		summary: profile.summary || {},
		reference: profile.reference || [],
  }
}

export default connect(mapStateProps)(Minimal);