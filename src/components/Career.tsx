import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Social Scout</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Integrated Instagram, TikTok, and YouTube native APIs. Designed secure
              OAuth 2.0 flows with encrypted token storage. Built AWS Lambda pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AngularJS Developer Intern</h4>
                <h5>CRM Application Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed CRM modules for customer and lead management.
              Implemented CRUD operations and REST API integration. Built
              responsive dashboards and optimized UI performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science Engineering</h4>
                <h5>Dr. Akhilesh Das Gupta Institute of Technology and Management</h5>
              </div>
              <h3>2021-2025</h3>
            </div>
            <p>
              CGPA: 9.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
