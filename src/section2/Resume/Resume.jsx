import React from 'react'
import { SiEducative } from 'react-icons/si'

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
                company: "Google",
                position: "Software Engineer",
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

    console.log(Object.values(ResumeData).map((item) => (item.Education)), "asdasdasd")


    return (
        <div>
            <h1>Resume</h1>


            {Object.keys(ResumeData)}

            {Object.values(ResumeData).map((item) => (item.Education))}
        </div>
    )
}
w
export default Resume
