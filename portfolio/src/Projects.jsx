import link from './assets/light-mode/link.png'
import links from './assets/light-mode/links.png'

function Projects() {
    return (
        <div className="projectsContainer">
            <img src={link} alt="link" class="logo"/>
            <p className="projectsTitle">Projects</p>

            <img src={links} alt="links" class="logo"/>
            <p className="linkTitle">PartsLane Subaru AU</p>
            <p className="linkText">E-commerce site for Subaru Car Parts</p>

            <img src={links} alt="links" class="logo"/>
            <p className="linkTitle">PartsLane Toyota SG</p>
            <p className="linkText">E-commerce site for Toyota Car Parts</p>

            <img src={links} alt="links" class="logo"/>
            <p className="linkTitle">PartsLane Toyota and Lexus HK</p>
            <p className="linkText">E-commerce site for Toyota and Lexus Car Parts</p>

            <img src={links} alt="links" class="logo"/>
            <p className="linkTitle">BCN Montjuic Tourist Point</p>
            <p className="linkText">E-commerce site for a tourist agency in Barcelona, Spain</p>

        </div>
    )
}

export default Projects