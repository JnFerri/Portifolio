import { useState } from 'react';
import './App.css';
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.js';
import Header from './Components/Header/Header.js';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection.js';
import SkillSection from './Components/SkillSection/SkillSection.js';



function App() {
  const sections = ["home", "sobre", "habilidades", "projetos", "contato"];
  const [activeSection, setActiveSection] = useState(null)

  return (
    <div className="App" class='flex flex-col' >
     <Header id={sections[0]} activeSection={activeSection} setActiveSection={setActiveSection} />
     <AboutMeSection id={sections[1]}  setActiveSection={setActiveSection} />
     <SkillSection id={sections[2]}  setActiveSection={setActiveSection} />
     <ProjectsSection id={sections[3]}  setActiveSection={setActiveSection} />
    </div>
    
  );
}

export default App;
