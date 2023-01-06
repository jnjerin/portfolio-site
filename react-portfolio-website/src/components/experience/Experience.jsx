import React from "react"
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-align">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-align">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
