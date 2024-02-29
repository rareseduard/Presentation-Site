import "./Skillset.css"

const Skillset = () => {
    return (
        <div className="skillset-container" id="skillset">
            <h2 className="skills-heading">Skillset</h2>
            <div className="skills">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
            </div> 
            <h2 className="experience">Experience</h2>
            <p className="experience-description">
                My primary experience in front-end development comes from my own personal projects, where I've been self-taught and actively engaged. I've also gained valuable insights into teamwork and effective communication through collaborative efforts.
            </p>
        </div>
    );
}

export default Skillset;
