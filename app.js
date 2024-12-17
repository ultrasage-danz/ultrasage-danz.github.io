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

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <header>
        <h1>riles</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Theme
        </button>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
        <section>
          <h2>Languages and Tools</h2>
          {/* Add your languages and tools here */}
        </section>
        <section>
          <h2>Projects</h2>
          {/* Add your projects here */}
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} riles. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

