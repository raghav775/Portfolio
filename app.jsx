// Root app
function App() {
  window.useReveal();
  return (
    <>
      <Loader />
      <a className="skip-link" href="#projects">Skip to projects</a>
      <GlobalBg />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <AudioToggle />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <TechnicalHighlights />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
