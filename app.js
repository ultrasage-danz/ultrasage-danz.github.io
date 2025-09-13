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
    { name: 'React', icon: 'https://github.com/vorillaz/devicons/blob/master/%21SVG%2Freact.svg' },
  ];

  const projects = [
    {
      name: 'AI Project',
      description: 'A machine learning project using TensorFlow and scikit-learn',
      link: 'https://github.com/ultrasage-danz',
      icon: '🤖',
      type: 'ai'
    },
    {
      name: 'Blockchain DApp',
      description: 'Decentralized application built with Solidity and Web3.js',
      link: 'https://github.com/ultrasage-danz',
      icon: '⛓️',
      type: 'blockchain'
    },
    {
      name: 'Robotics Control',
      description: 'Raspberry Pi based robotics control system',
      link: 'https://github.com/ultrasage-danz',
      icon: '🤖',
      type: 'robotics'
    },
    {
      name: 'SmartCall',
      description: 'SmartCall is a backend system for a calling application designed to manage and handle real-time voice communications efficiently. The project focuses on building a secure, scalable backend architecture to support high concurrency and manage call data.',
      link: 'https://github.com/ultrasage-danz/SmartCall-Lite',
      icon: '📞',
      type: 'backend'
    },
    {
      name: 'AI Agent',
      description: 'Agentic Copilot built with LangGraph, CopilotKit, Tavily & Next.js. it will handle user requests by performing multiple search queries and stream the search back with status and results in real-time to the client. ',
      link: 'https://examples-coagents-ai-researcher-ui.vercel.app/',
      icon: '🔍',
      type: 'agent'
    },
    {
      name: 'Research Canvas UI',
      description: 'Research Canvas UI built with LangGraph, CopilotKit, Tavily & Next.js. ',
      link: 'https://examples-coagents-research-canvas-ui.vercel.app/',
      icon: '📊',
      type: 'research'
    },
    {
      name: 'AI Travel Agentic Copilot',
      description: 'AI Travel Agentic Copilot built with LangGraph, CopilotKit, Tavily & Next.js. It is a Travel Planner application with search capabilities using CoAgents. ',
      link: 'https://examples-coagents-ai-travel-app.vercel.app/',
      icon: '✈️',
      type: 'travel'
    },
    {
      name: "World's Largest Hackathon",
      description: "Landing page for world's largest Hackathon organised by bolt.new ",
      link: 'https://nimble-genie-5fad2c.netlify.app',
      icon: '🏆',
      type: 'hackathon'
    },
    {
      name: "Video Subtitles App",
      description: "A full-stack web application that automatically generates accurate subtitles for uploaded videos using AssemblyAI's speech-to-text API. The app features a user-friendly interface for uploading videos, real-time progress feedback, and secure backend processing. Designed for creators and educators, it streamlines the workflow of adding captions, improving accessibility and engagement for video content.",
      link: 'https://video-subtitles-qdxy.onrender.com',
      icon: '🎬',
      type: 'video'
    },
    {
      name: "BrandSpark AI",
      description: "BrandSpark AI is a dynamic web application that instantly transforms a user's business idea into a complete, ready-to-use brand identity. By leveraging the power of Google's latest generative AI models (Gemini and Imagen), it generates a unique company name, a catchy tagline, a custom logo, and a comprehensive set of branding guidelines, including color palette, typography, and brand voice. This tool is designed to empower entrepreneurs and creators by dramatically accelerating the initial branding process from days to seconds.",
      link: 'https://dev.to/ik_8a78062fd65be769dd835/brandspark-ai-3pb0',
      icon: '✨',
      type: 'brand'
    },
    {
      name: "Assembly AI Projects",
      description: "These are projects built using Assembly AI API. Ranging from 'Speech To Text' to 'Audio Intelligence' to 'LeMUR(a framework that lets you apply LLMs to audio transcripts) based projects, they will blow your mind !!",
      link: 'https://github.com/ultrasage-danz/assembly-ai-cookbook-projects',
      icon: '🎙️',
      type: 'assembly'
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
        <div className="logo">ultrasage-danz</div>
        
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>

      <main>
        <section>
          <img 
            className="typing-svg"
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=F7875D&center=true&width=600&lines=Hi+there!;I'm+'ultrasage-danz';I'm+a+Software+Engineer...;You+have+a+problem+to+solve%3F;Hit+me+up!" 
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
                <img src={lang.icon || "/placeholder.svg"} alt={lang.name} />
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
                <div className={`project-icon ${project.type}`}>
                  {project.icon}
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View this
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
            <div className="support-section">
                <p>Support for more to come:</p>
                <div className="support-links">
                <a 
                    href="https://thanks.dev/ultrasage-danz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="support-button thanks-dev"
                >
                    🙏 Support on Thanks.dev
                </a>
                <a 
                    href="https://www.buymeacoffee.com/ultrasagedanz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="support-button coffee"
                >
                    ☕ Buy me a coffee
                </a>
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} riles. All rights reserved.</p>
        </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
