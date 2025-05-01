import code from './assets/light-mode/code.png'

import react from './assets/common/react.png'
import html from './assets/common/html.png'
import css from './assets/common/css.png'
import javascript from './assets/common/js.png'
import figma from './assets/common/figma.png'

import java from './assets/common/java.png'
import csharp from './assets/common/c-sharp.png'
import python from './assets/common/python.png'
import springBoot from './assets/common/springBoot.png'

import selenium from './assets/common/selenium.png'
import cucumber from './assets/common/cucumber.png'

import wordpress from './assets/common/wordpress.png'
import wix from './assets/common/wix.png'

function TechStack() {
    return (
        <div className="techStackContainer">
            <img src={code} alt="code" id="code" class="logo"/>
            <p className="techStackTitle">Tech Stack</p>

            <div className="frontendContainer">
                <p className="frontendTitle">Frontend</p>

                <div className="reactContainer">
                    <img src={react} alt="react" class="logo"/>
                    <p className="stackTitle">React.js</p>
                </div>

                <div className="htmlContainer">
                    <img src={html} alt="html" class="logo"/>
                    <p className="stackTitle">HTML</p>
                </div>

                <div className="cssContainer">
                    <img src={css} alt="css" class="logo"/>
                    <p className="stackTitle">CSS</p>
                </div>

                <div className="javascriptContainer">
                    <img src={javascript} alt="javascript" class="logo"/>
                    <p className="stackTitle">JavaScript</p>
                </div>

                <div className="figmaContainer">
                    <img src={figma} alt="figma" class="logo"/>
                    <p className="stackTitle">Figma</p>
                </div>
            </div>

            <div className="backendContainer">
                <p className="backendTitle">Backend</p>

                <div className="javaContainer">
                    <img src={java} alt="java" class="logo"/>
                    <p className="stackTitle">Java</p>
                </div>

                <div className="csharpContainer">
                    <img src={csharp} alt="csharp" class="logo"/>
                    <p className="stackTitle">C#</p>
                </div>

                <div className="pythonContainer">
                    <img src={python} alt="python" class="logo"/>
                    <p className="stackTitle">Python</p>
                </div>

                <div className="springBootContainer">
                    <img src={springBoot} alt="springBoot" class="logo"/>
                    <p className="stackTitle">Spring Boot</p>
                </div>
            </div>

            <div className="qaContainer">
                <p className="qaTitle">QA Automation</p>

                <div className="seleniumContainer">
                    <img src={selenium} alt="selenium" class="logo"/>
                    <p className="stackTitle">Selenium</p>
                </div>

                <div className="cucumberContainer">
                    <img src={cucumber} alt="cucumber" class="logo"/>
                    <p className="stackTitle">Cucumber</p>
                </div>
            </div>

            <div className="cmsContainer">
                <p className="cmsTitle">Content Management System</p>

                <div className="wordpressContainer">
                    <img src={wordpress} alt="wordpress" class="logo"/>
                    <p className="stackTitle">Wordpress</p>
                </div>

                <div className="wixContainer">
                    <img src={wix} alt="wix" class="logo"/>
                    <p className="stackTitle">Wix</p>
                </div>
            </div>
        </div>
    )
}

export default TechStack