import Header from "./components/Header/Header"
import Presentation from "./components/Presentation/Presentation"
import About from "./components/About/About"
import ProjectsSection from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"




function App() {
  return (
    <>
      <Header/>
      <main>
        <Presentation/>
        <About/>
        <ProjectsSection/>
        <Skills/>
      </main>
      <Footer/>
    </>
  )
}

export default App
