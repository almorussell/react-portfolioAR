import Headshot from '../assets/headshot.jpg'

const About = () => {
  return (
       <section id="about" className="about">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={Headshot} 
                alt="Profile Image"
                />
                <div className="text">
                    <h3>I use my hands to build things for the web, mobile, & make life more beautiful.</h3>
                    <p>Currently studying application and web development. Passionate about coding, problem-solving, and creating community.</p>
                    <div className="skills">
                        <span>HTML/CSS</span>
                        <span>JavaScript</span>
                        <span>SQL</span>
                        <span>React</span>
                        <span>Python</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
