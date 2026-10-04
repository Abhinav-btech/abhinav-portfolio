import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Abhinav<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/resume.pdf" download className="nav-btn">
          Resume ↓
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Abhinav <span>Kumar</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, JavaScript and MERN stack technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-box">
            <div className="profile-placeholder">
              <span>AK</span>
            </div>
          </div>

          <div className="floating-card react-card">
            <strong>⚛</strong>
            <span>React.js</span>
          </div>

          <div className="floating-card js-card">
            <strong>JS</strong>
            <span>JavaScript</span>
          </div>

          <div className="experience-card">
            <strong>01+</strong>
            <span>Years Learning<br />Web Development</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building the web with passion.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Abhinav Kumar, a passionate developer focused on building
              modern and responsive web applications.
            </p>

            <p>
              I enjoy learning new technologies, solving programming problems
              and turning ideas into real-world digital products.
            </p>

            <p>
              My current focus is MERN Stack Development, with interest in
              React.js, JavaScript, Node.js, Express.js and MongoDB.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <span>01</span>
              <h3>Developer</h3>
              <p>Frontend & MERN Stack Development</p>
            </div>

            <div className="info-card">
              <span>02</span>
              <h3>Learner</h3>
              <p>Always exploring new technologies</p>
            </div>

            <div className="info-card">
              <span>03</span>
              <h3>Problem Solver</h3>
              <p>Focused on practical solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">HTML</div>
            <h3>HTML5</h3>
            <p>Semantic web structure</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">CSS</div>
            <h3>CSS3</h3>
            <p>Responsive UI design</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Interactive functionality</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚛</div>
            <h3>React.js</h3>
            <p>Modern React applications</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">N</div>
            <h3>Node.js</h3>
            <p>Backend development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">EX</div>
            <h3>Express.js</h3>
            <p>REST API development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">DB</div>
            <h3>MongoDB</h3>
            <p>NoSQL database</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">GH</div>
            <h3>Git & GitHub</h3>
            <p>Version control</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY PROJECTS</p>
          <h2>Things I've built.</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>E-Commerce Website</h3>

            <p>
              A modern shopping website built with React.js featuring
              products, categories, routing and cart functionality.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Vite</span>
            </div>

            <a href="#contact" className="project-button">
              View Project ↗
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Developer Portfolio</h3>

            <p>
              A professional portfolio website to showcase skills, projects,
              education and development journey.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <a href="#home" className="project-button">
              Live Preview ↗
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Upcoming MERN Project</h3>

            <p>
              A full-stack application currently being developed using the
              MERN stack.
            </p>

            <div className="project-tags">
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <a href="#contact" className="project-button">
              Coming Soon →
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>Education & Training.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>Education</span>
              <h3>B.Tech in Computer Science</h3>
              <h4>Indo Global College of Engineering</h4>

              <p>
                Building a strong foundation in programming, computer science
                and web technologies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>Training</span>
              <h3>45-Day MERN Stack Training</h3>
              <h4>Web Development</h4>

              <p>
                Practical learning of modern frontend and MERN stack
                development technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className="section">
        <div className="section-heading">
          <p>WHAT I BRING</p>
          <h2>More than just code.</h2>
        </div>

        <div className="bring-grid">
          <div className="bring-card">
            <div className="bring-icon">⌘</div>
            <h3>Clean Code</h3>
            <p>Readable and maintainable code.</p>
          </div>

          <div className="bring-card">
            <div className="bring-icon">◈</div>
            <h3>Responsive UI</h3>
            <p>Websites that work across devices.</p>
          </div>

          <div className="bring-card">
            <div className="bring-icon">⚡</div>
            <h3>Problem Solving</h3>
            <p>Simple solutions to complex problems.</p>
          </div>

          <div className="bring-card">
            <div className="bring-icon">↗</div>
            <h3>Continuous Learning</h3>
            <p>Always improving and learning new tools.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-box">
          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Let's build something great.</h2>
          </div>

          <p className="contact-description">
            I'm open to internship opportunities, projects and collaborations.
            Feel free to connect with me.
          </p>

          <div className="contact-links">
            <a href="mailto:abhinav05kumar@gmail.com">
              <span>Email</span>
              abhinav05kumar@gmail.com
            </a>

            <a
              href="https://github.com/Abhinav-btech"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-kumar-a16702325/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>
            Abhinav<span>.</span>
          </strong>
          <p>Designed & built by Abhinav Kumar</p>
        </div>

        <p>© 2026 Abhinav Kumar. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;