import React from 'react'
import { SiEducative } from 'react-icons/si'
import './resume.css'

const Resume = () => {

    const ResumeData = {
        icon: <SiEducative />,
        Education: [

            {
                degree: "Bachelor of Science, Computer Science",
                institution: "University of California, Berkeley",
                year: "2012 - 2016"
            },
            {
                degree: "Master of Science, Computer Science",
                institution: "Stanford University",
                year: "2017 - 2021"
            },
            {
                degree: "Ph.D. in Computer Science",
                institution: "Stanford University",
                year: "2022 - Presentt"
            }

        ],

        Experience: [
            {
                company: "Toyota Pakistan",
                position: "Accountant",
                duration: "May 2022 - Present",
                description: "Designed and implemented a machine learning algorithm to predict customer churn in a telecommunications company's network."
            },
            {
                company: "Facebook",
                position: "Software Engineer",
                duration: "July 2020 - May 2022",
                description: "Built a recommendation system for Facebook's product catalog using TensorFlow and PyTorch."
            },
            {
                company: "University of California, Berkeley",
                position: "Undergraduate Research Assistant",
                duration: "Fall 2019 - Spring 2020",
                description: "Investigated the impact of climate change on the urban ecosystem using data analysis and modeling techniques."
            }
        ]
    }

    // console.log(Object.values(ResumeData).map((item) => (item.Education)), "asdasdasd")


    const ResumeDataAll = ResumeData.Education.map((item) => (item.degree));

    console.log(ResumeDataAll);




    return (
        <div className='resume'>
            <h1>Resume</h1>



            <div className='icon-title'>
                <span>{Object.values(ResumeData)[0]}</span>
                <h1>  {Object.keys(ResumeData)[1]}</h1>
            </div>


            {ResumeData.Education.map((item, index) => {
                return (
                    <div key={index} className='data'>
                        <h2>{item.degree}</h2>
                        <h2>{item.institution}</h2>
                        <h3>{item.year}</h3>
                    </div>  
                )
            })}



            <div className='icon-title'> 

                <span>{Object.values(ResumeData)[0]}</span>
                <h1>{Object.keys(ResumeData)[2]}</h1>
            </div>


            {ResumeData.Experience.map((exp, index) => {
                return (
                    <div key={index} className='data'>
                        <h2>{exp.company}</h2>
                        <h3>{exp.position}</h3>
                        <h4>{exp.duration}</h4>
                        <p>{exp.description}</p>
                    </div>
                )
            })}




        </div>
    )
}

export default Resume
