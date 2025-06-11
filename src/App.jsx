import Header from "./components/Header/Header"
import Presentation from "./components/Presentation/Presentation"
import { Element } from 'react-scroll'



function App() {
  return (
    <>
      <Header/>
      <main>
        
          <Presentation/>
        
     
  
      <Element name="about">
        <section id="about">
          <h2>À propos de moi</h2>
          <p>Je suis Alicia,blablabla </p>
        </section>
      </Element>

      <Element name="contact">
        <section id="contact">
          <h2>Me contacter</h2>
          <p>coordonnées blablabla </p>
        </section>
      </Element>
      </main>
    </>
  )
}

export default App
