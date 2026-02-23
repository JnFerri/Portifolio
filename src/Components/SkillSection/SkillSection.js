import Typhografy from "../typhografy/Typhografy"
import CardList from "./CardsList/CardList"
import imageCoffee from '../../Assets/Images/cafe.png'
import useScrollObserverAnimation from "../../Hooks/useScrollObserverAnimation";
import useActiveSectionObserver from "../../Hooks/IsActiveSection";

const SkillSection = (props) => {
  const { id , setActiveSection } = props
  const { ref : visibilityRef, isVisible } = useScrollObserverAnimation()
  const activeRef = useActiveSectionObserver(id, setActiveSection)

  // unir os dois refs
  const combinedRef = (element) => {
    visibilityRef.current = element
    activeRef.current = element
  }

  return (
    <section id={id} ref={combinedRef} class=' scroll-mt-[10vh] h-auto lg:scroll-mt-[10vh] lg:h-[90vh] bg-brand-strongbrown w-full flex flex-col items-center justify-between' >
      <Typhografy variant="h2" class='text-6xl mt-4 font-primary text-white w-full font-bold text-center' >Habilidades</Typhografy>
      <div class={`w-full h-auto lg:h-[90%] flex flex-col items-center justify-between  `}>
        <div class='flex flex-col lg:flex-row justify-between items-center w-[calc(100%-2rem)] h-auto lg:h-[100%]' >
          <div class='w-[98%] lg:w-[98%] '>
          <CardList isVisible={isVisible}  />
          </div>
          
          <div class={`flex flex-col h-[90%] items-center justify-center w-[98%] lg:w-[50%] m-2  ${isVisible ? 'animate-slide-up' : null}`}>
            <div class = 'w-[90%] h-[40%] flex justify-center items-center'>
              <img src={imageCoffee} class='w-auto lg:w-auto h-full' alt='imagem de chicara de café com simbolos de linguagem de programação ao redor.' />
            </div>
            
            <Typhografy variant='p' class='text-base mt-2 font-primary text-white w-full'> Sou capaz de criar páginas web atraentes e altamente estilizáveis, utilizando minhas habilidades em HTML5, CSS3 e JavaScript. Domino o desenvolvimento de landing pages e Single Page Applications (SPAs) com o framework React.js, garantindo interfaces dinâmicas, responsivas e eficientes. </Typhografy>
            <Typhografy variant='p' class='text-base mt-2 font-primary text-white w-full'> No Back-end, possuo conhecimentos básicos na criação de APIs REST, integrando-as a projetos com bancos de dados relacionais e não relacionais. Além disso, tenho experiência em Business Intelligence (BI), trabalhando com QlikView para análise de dados e desenvolvendo habilidades em SQL e interpretação de informações estratégicas. </Typhografy>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SkillSection