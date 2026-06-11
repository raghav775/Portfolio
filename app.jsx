// Root app
const { useEffect } = React;

function App() {
  window.useReveal();
  return (
    <>
      <Loader />
      <GlobalBg />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <AudioToggle />
      <main>
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
