import experience from './assets/light-mode/experience.png'
function Experience() {
    return (
        <div className="experienceContainer">
            <img src={experience} alt="experience" />
            <p className="experienceTitle">Experience</p>

            <p className="backEnd">
                <strong>Backend Web Developer</strong> | Inchcape Digital | 2024 - 2025 <br/>
                Java Developer (SAP Commerce Cloud (hybris)), <br/>
                Automation Tester (Selenium & Cucumber)
            </p>

            <p className="sap">
                <strong>SAP SD Associate</strong> | Inchcape Digital | 2024 <br/>
                SAP S/4HANA, SD Module
            </p>

            <p className="webMaintenance">
                <strong>Web Maintenance</strong> | BCN Montjuic | 2022 <br/>
                Wix, UI/UX
            </p> 
        </div>
    )
}

export default Experience