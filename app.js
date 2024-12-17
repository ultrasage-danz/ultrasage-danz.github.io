const { useState } = React;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const languages = [
    { name: 'Jupyter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Solidity', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Google Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  ];

  const projects = [
    {
      name: 'AI Project',
      description: 'A machine learning project using TensorFlow and scikit-learn',
      link: 'https://github.com/ultrasage-danz'
    },
    {
      name: 'Blockchain DApp',
      description: 'Decentralized application built with Solidity and Web3.js',
      link: 'https://github.com/ultrasage-danz'
    },
    {
      name: 'Robotics Control',
      description: 'Raspberry Pi based robotics control system',
      link: 'https://github.com/ultrasage-danz'
    }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="container">
      <img 
        className="visitor-badge"
        src="https://visitor-badge.laobi.icu/badge?page_id=ultrasage-danz.ultrasage-danz" 
        alt="visitor badge" 
      />
      
      <header>
        <div className="logo">riles</div>
        <button onClick={toggleTheme} aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </header>

      <main>
        <section>
          <img 
            className="typing-svg"
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=F7875D&center=true&width=600&lines=Hi+there!;I'm+riles;I'm+a+Software+Engineer...;You+have+a+problem+to+solve%3F;Hit+me+up!" 
            alt="Typing SVG" 
          />
        </section>

        <section>
          <h2>About Me</h2>
          <ul>
            <li>I'm currently working on numerous <strong>Hackathons</strong>.</li>
            <li>I'm currently learning <strong>Rust</strong> and <strong>Raspberry pi</strong></li>
            <li>Checkout this Master ML course with scikit-learn: <a href="https://courses.dataschool.io/master-machine-learning-with-scikit-learn/vb6ld">Master ML course</a></li>
            <li>All of my projects are available at <a href="https://github.com/ultrasage-danz">👨‍💻riles GitHub👨‍💻</a></li>
            <li>Fun fact <strong>⚡I love travelling⚡</strong></li>
            <li>Ask me about <strong>💬Artificial Intelligence, Robotics and Blockchain technologies such as Algorand and Chainlink💬</strong></li>
          </ul>
        </section>

        <section>
          <h2>Languages and Tools</h2>
          <div className="tools-grid">
            {languages.map((lang, index) => (
              <div key={index} className="tool-item">
                <img src={lang.icon} alt={lang.name} />
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>GitHub Stats</h2>
          <div className="stats-grid">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ultrasage-danz&show_icons=true&locale=en&layout=compact&theme=algolia&langs_count=8" 
              alt="Top Languages" 
            />
            <img 
              src="https://github-readme-stats.vercel.app/api?username=ultrasage-danz&show_icons=true&theme=algolia&locale=en" 
              alt="GitHub Stats" 
            />
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=ultrasage-danz&theme=algolia" 
              alt="GitHub Streak" 
            />
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} riles. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

