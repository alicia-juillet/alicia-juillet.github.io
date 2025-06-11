import Header from "./components/Header/Header"
import Presentation from "./components/Presentation/Presentation"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import ProjectsSection from "./components/Projects/Projects"




function App() {
  return (
    <>
      <Header/>
      <main>
        <Presentation/>
        <About/>
        <ProjectsSection/>
        <section id="contact">
          <h2>Me contacter</h2>
          <p>coordonnées blablabla </p>
        </section>
      
      </main>
    </>
  )
}

export default App
