import React from 'react'
import './About.css'
import { FaFaceAngry, FaWebflow } from 'react-icons/fa6'

const About = () => {

    const cardSection = [
        {
            icon: <FaWebflow />,
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'Graphic Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'SEO',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },

    ]
    return (
        <div className='about-section'>
            <h1 className='about-heading'>About Me</h1>

            <span className='aboutme-underline' />


            <div className='about-section-paragraph'>
                <p>
                I am a Frontend Developer with a passion for building beautiful and functional websites. Skilled in HTML, CSS, JavaScript, and frameworks like React and Angular, I focus on creating clean, responsive designs that offer seamless user experiences. I’m always eager to learn new technologies and keep up with the latest trends in web development.   
                </p>
                <p>
                With experience in both solo and team projects, I thrive in collaborative environments where I can contribute not only my technical expertise but also my problem-solving abilities. I love transforming wireframes and design concepts into interactive, user-friendly applications, ensuring that every detail is optimized for performance and accessibility. Beyond coding, I enjoy exploring new design trends, working closely with designers to ensure visual consistency, and constantly improving the usability of websites. My goal is to craft front-end solutions that not only look great but also function flawlessly across all devices and browsers, creating a positive and engaging experience for every user.


                </p>
            </div>



            <div className='what-Iam-doing'>
                <h1>What I'm Doing</h1>

                <div className='card-parent'>

                    {cardSection.map((cards, index) => {
                        return (
                            <div className='card-container' key={index}>
                                <span>{cards.icon}</span>


                                <div>
                                    <h2>{cards.title}</h2>
                                    <p>{cards.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>







        </div>
    )
}

export default About
