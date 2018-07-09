import React, { Component } from 'react';
import { connect } from 'react-redux'
import './minimal.css';


const Minimal = ({ basicInfo, summary, personalInfo, workEx, education, skills, certifications }) => (
    <div className="resume-content">
        <h1 className="title is-1 text-center">
            {basicInfo.fullname}
        </h1>
        <h3 className="subtitle text-center">{basicInfo.profession}</h3>
        <hr />
        <div className="columns is-multiline">
            <div className="column is-half intact">
                <h2 className="section-title">About</h2>
                <p>{summary.workSummary}</p>
            </div>
            <div className="column is-hal intactf">
                <h2 className="section-title">Contact</h2>
                <p>Mobile number: {personalInfo.mobile}</p>
                <p>Email Id: {personalInfo.email}</p>
                <p>{personalInfo.twitterUsername ? "Twitter: " + personalInfo.twitterUsername : ""}</p>
                <p>{personalInfo.githubUsername ? "Github: " + personalInfo.githubUsername : ""}</p>
                <p>{personalInfo.myWebsite ? "Website: " + personalInfo.myWebsite : ""}</p>

            </div>
            <div className="column is-12 always-page-brake">
                <h2 className="section-title">Experience</h2>
                <div className="columns is-variable is-multiline">
                    {workEx.map((work, id) => {
                        const startYear = new Date(work.startDate).getFullYear();
                        const startMonth = (new Date(work.startDate).getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2});
                        const endYear = new Date(work.endDate).getFullYear();
                        const endMonth = (new Date(work.endDate).getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2});
                        const endDate = endMonth + ', ' + endYear;

                        return (
                            <div className="column is-6 job-section intact" key={id}>
                                <h3 className="job-title">{work.designation}</h3>
                                <span className="company-name"> {work.company}, {work.location} ({startMonth}, {startYear} - {work.isPresent || !endYear ? 'Present' : endDate})</span>
                                <div className="text-section">{work.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="column is-6 intact" id="skill">
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list columns is-multiline">
                    {skills.map((skill, id) => {
                        return (
                            <div className="column is-6"  key={id}>
                                <li className="is-dotted">{skill.name}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="column is-6">
                <div className="column is-12">
                    <h2 className="section-title">Education</h2>
                    {education.map((edu, id) => {
                        return (
                            <div className="columns intact" key={id}>
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
                <div className="column is-12">
                    <h2 className="section-title">certifications</h2>
                    {certifications.map((certi, id) => {
                        const year = new Date(certi.dated).getFullYear();
                        const month = (new Date(certi.dated).getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2});
                        return (
                            <div className="columns intact" key={id}>
                                <div className="column is-3">
                                    <span>{month},{year}</span>
                                </div>
                                <div className="column is-8">
                                    <span>{certi.name}, {certi.authority}</span>
                                </div>
                            </div>
                        )    
                    })}
                </div>
            </div>
        </div>
    </div>

);


function mapStateProps({ profile }) {
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