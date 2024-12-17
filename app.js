const { useState, useEffect } = React;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchReadme();
  }, []);

  async function fetchReadme() {
    try {
      const response = await fetch('README.md');
      if (!response.ok) throw new Error('Failed to load README');
      const markdown = await response.text();
      setContent(markdown);
    } catch (error) {
      console.error(error);
    }
  }

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
    { name: 'AI Project', description: 'A machine learning project using TensorFlow and scikit-learn', link: 'https://github.com/ultrasage-danz/ai-project' },
    { name: 'Blockchain DApp', description: 'Decentralized application built with Solidity and Web3.js', link: 'https://github.com/ultrasage-danz/dapp' },
    { name: 'Robotics Control', description: 'Raspberry Pi based robotics control system', link: 'https://github.com/ultrasage-danz/robotics' },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <header>
        <img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=ultrasage-danz.ultrasage-danz" alt="Visitor Badge" />
        <h1>riles</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Theme
        </button>
      </header>
      <main>
        <section>
          <h1 align="center">
            <a href="https://git.io/typing-svg">
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=F7875D&center=true&width=600&lines=Hi+there!;I'm+riles;I'm+a+Software+Engineer...;You+have+a+problem+to+solve%3F;Hit+me+up!" alt="Typing SVG" />
            </a>
          </h1>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {languages.map((lang, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px' }}>
                <img src={lang.icon} alt={lang.name} width="40" height="40" />
                <span style={{ fontSize: '12px', textAlign: 'center' }}>{lang.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </section>
        <section>
          <h2>GitHub Stats</h2>
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=ultrasage-danz&show_icons=true&locale=en&layout=compact&theme=algolia&langs_count=8" alt="Top Languages" />
          <img src="https://github-readme-stats.vercel.app/api?username=ultrasage-danz&show_icons=true&theme=algolia&locale=en" alt="GitHub Stats" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=ultrasage-danz&theme=algolia" alt="GitHub Streak" />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} riles. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

