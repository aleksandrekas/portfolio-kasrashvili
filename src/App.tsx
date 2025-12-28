import Socials from "./assets/components/headbar/Socials"
import Contact from "./assets/components/contact/Contaxt"
import Projects from "./assets/components/projects/Projects"




function App() {
  return (

    <div className="container">
        <div className="midContainer">
          <Socials/>
          <Projects/>
        </div>      
        <Contact />
    </div>
  )
}

export default App
