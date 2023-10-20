const About = () => {
  const age = new Date().getFullYear() - 1991 - (new Date().getMonth() < 7 || (new Date().getMonth() === 7 && new Date().getDate() < 23));
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/profile.jpeg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Shawn
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Kemp
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>{age} Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Languages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>Phoenix, Arizona</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>shawn@mintslate.com</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4>Node JS</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-amazonwebservices-original" />
              </span>
              <h4>AWS</h4>
            </div>
          </div>
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>React JS</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-wordpress-plain" />
              </span>
              <h4>WordPress</h4>
            </div>
          </div>
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-redux-original" />
              </span>
              <h4>Redux</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>Sass</h4>
            </div>
          </div>
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-kotlin-plain" />
              </span>
              <h4>Kotlin</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jenkins-line" />
              </span>
              <h4>CICD</h4>
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Customer Care Center(Various Roles)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>February 2011 - July 2016</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>GoDaddy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>System Analyst I - III</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>July 2016 - March 2020</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>GoDaddy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Freelance Full Stack Engineer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>March 2017 - Now</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Self</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Software Engineer I</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>March 2020 - March 2021</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>GoDaddy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Software Engineer II</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>March 2021 - March 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>GoDaddy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Senior Software Engineer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>March 2022 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>GoDaddy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
