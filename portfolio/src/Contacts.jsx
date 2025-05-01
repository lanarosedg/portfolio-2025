import whatsapp from './assets/light-mode/whatsapp.png';
import linkedin from './assets/light-mode/linkedin.png';
import github from './assets/light-mode/github.png';

function Contacts() {
    return (
        <div className="contactsContainer">
            <img class="whatsappIcon" src={whatsapp} alt="whatsapp" />
            <img class="linkedinIcon" src={linkedin} alt="linkedin" />
            <img class="githubIcon" src={github} alt="github" />

        </div>
    )
}

export default Contacts