
import { Form } from "./components/Form/Form"
import { Introduction } from "./components/Introduction/Introduction"
//import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"
import SocialMedias from "./components/Social Medias/SocialMedias"
//import { SoftSkills } from "./components/Soft Skills/SoftSkills"



function App() {
  
  return (
    <>
      <SocialMedias />
      {/* <Navbar /> */}
      <Introduction />
      <Skills />
      {/* <SoftSkills /> */}
      <Projects />
      <Form />
    </>
  )
}

export default App
