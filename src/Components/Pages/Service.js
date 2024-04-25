function Services() {
    return (
      <div className="services" id="Service">
        <h2 className="heading">
          My<span> Services</span>
        </h2>
  
        <div className="services-content">
          <div className="services-box">
            <i className="bx bx-code-curly" style={{ fontSize: '1.5em', color: 'green' }}></i>
            <h3> BackEnd Developer</h3>
            <p>
              Develop the back of the System, being able to link with Database and api's if necessary. keeping a Organized and bug-free code structure, meeting all customer demands
            </p>
            <a href="https://wa.link/sjpipp" className="btn-more">
              <i className="bx bxl-whatsapp" style={{ fontSize: '1.5em', color: 'green' }}></i> Contact-me
            </a>
          </div>
  
          <div className="services-box">
            <i className="bx bx-wrench" style={{ fontSize: '1.5em', color: 'green' }}></i>
            <h3> Website Maintenance</h3>
            <p>
              Add new functions to the site, solve problems related to the site and keep it active as you wish, I have already created e-commerce sites but I accept the challenge with focus and results
            </p>
            <a href="https://wa.link/sjpipp" className="btn-more">
              <i className="bx bxl-whatsapp" style={{ fontSize: '1.5em', color: 'green' }}></i> Contact-me
            </a>
          </div>
  
          <div className="services-box">
            <i className="bx bx-code-alt" style={{ fontSize: '1.5em', color: 'green' }}></i>
            <h3>Task automation</h3>
            <p>
              I automate tasks by creating scripts that perform repetitive actions, increasing efficiency and reducing errors. I can identify processes to be automated within your project.
            </p>
            <a href="https://wa.link/sjpipp" className="btn-more">
              <i className="bx bxl-whatsapp" style={{ fontSize: '1.5em', color: 'green' }}></i> Contact-me
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  