import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">J.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">HELLO, I'M</p>

          <h1>
            Jhanyz <span>Laviña</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p className="hero-description">
            I enjoy creating useful, creative, and user-friendly software
            solutions while continuously learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img
              src="/profile.jpg"
              alt="Jhanyz Laviña"
            />
          </div>

          <div className="flower flower-one">✿</div>
          <div className="flower flower-two">♡</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">♡</div>

            <h3>A Little About Me</h3>

            <p>
              Hi! I'm Jhanyz, a Computer Science student who is passionate
              about technology, software development, and creating meaningful
              digital experiences.
            </p>

            <p>
              I enjoy working on projects that allow me to combine
              problem-solving, creativity, and programming.
            </p>
          </div>

          <div className="about-info">
            <div>
              <span>Name</span>
              <strong>Jhanyz Laviña</strong>
            </div>

            <div>
              <span>Course</span>
              <strong>BS Computer Science</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Software Development</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Philippines</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-title">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Project One</h3>

            <p>
              A software project designed to solve a real-world problem
              through an intuitive and user-friendly system.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card featured">
            <div className="project-number">02</div>

            <h3>Management System</h3>

            <p>
              A system created to organize processes, manage information,
              and improve efficiency through digital solutions.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Vite</span>
              <span>Database</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Future Project</h3>

            <p>
              A future project where I can explore new technologies and
              continue improving my software development skills.
            </p>

            <div className="tags">
              <span>Coming Soon</span>
            </div>

            <a href="#" className="project-link">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-title">
          <p>WHAT I USE</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill">
            <span>HTML</span>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>CSS</span>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress">
              <div style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>C#</span>
            <div className="progress">
              <div style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Git & GitHub</span>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-box">
          <p>LET'S CONNECT</p>

          <h2>Have a project in mind?</h2>

          <p>
            I'd love to hear from you. Feel free to reach out and let's
            create something meaningful together.
          </p>

          <a
            href="mailto:your@email.com"
            className="primary-btn"
          >
            Say Hello ♡
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Jhanyz Laviña</p>

        <div>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
