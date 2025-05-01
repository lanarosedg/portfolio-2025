import moon from './assets/light-mode/moon.png'
import location from './assets/light-mode/location.png'

function Name() {
    return(
        <div class="nameContainer">
            <p class="nameTitle">Lana Rose</p>
            <img src={moon} alt="moon" class="moonIcon"/>
            <img src={location} alt="location" class="locationIcon"/>
            <p class="location">Manila, Philippines</p>
            <p class="role">Full Stack Web Developer</p>
        </div>
    )
}

export default Name