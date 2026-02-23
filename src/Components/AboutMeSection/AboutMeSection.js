
import Typhografy from "../typhografy/Typhografy"
import PolaroiAnimationImages from "./PolaroidAnimateImages/PolaroidAnimationImages"
import useScrollObserverAnimation from "../../Hooks/useScrollObserverAnimation";
import useActiveSectionObserver from "../../Hooks/IsActiveSection";

const AboutMeSection = (props) => {
  const { ref : visibilityRef, isVisible } = useScrollObserverAnimation()
  const {id,setActiveSection} = props
  const activeRef = useActiveSectionObserver(id, setActiveSection)

  // unir os dois refs
  const combinedRef = (element) => {
    visibilityRef.current = element
    activeRef.current = element
  }


  return (
    <section  id={id} ref={combinedRef} class={` scroll-mt-[10vh] h-[90dvh] landscape:md:scroll-mt-[15vh] landscape:lg:scroll-mt-[10%] landscape:md:h-[250dvh] landscape:lg:h-[90dvh] lg:scroll-mt-[10%] lg:h-[90dvh] bg-gradient-to-b from-[#3b4e4c] to-[#332214] w-full  flex flex-col items-center justify-between `}>
      <Typhografy variant="h2" class={`text-6xl mt-4 font-primary text-white w-full font-bold text-center ${isVisible ? "animate-slide-up" : null} `} >Sobre Mim</Typhografy>
      <div class='w-[calc(100%-2rem)] h-full  xl:h-[90%] flex-col lg:flex-row flex items-center lg:justify-between '>
        <div class={`w-[100%] h-full  lg:w-full lg:h-full   ${isVisible ? "animate-slide-up" : null
          }`} isVisible={isVisible} >
        <PolaroiAnimationImages />
        </div>
        <div class={`w-[100%] lg:w-2/4 h-full flex flex-col justify-center text-sm lg:text-base items-center  ${isVisible ? "animate-slide-up" : null
          }`}>
          <Typhografy variant="p" class='text-sm lg:text-base m-0  lg:m-2 font-primary text-white w-full ' > Sou desenvolvedor Fullstack com experiência em criar soluções digitais modernas, desde landing pages otimizadas até aplicações completas com React, Node.js e APIs REST. Tenho vivência com análise de dados e BI, o que me permite unir programação e inteligência de negócios em projetos eficientes. Estou aberto a oportunidades de trabalho e freelancer. </Typhografy>
          <Typhografy variant="p" class='text-sm lg:text-base m-0  lg:m-2 font-primary text-white w-full ' > Tech Stacks & Interesses:</Typhografy>
          <ul class='w-full list-inside list-disc'>
            <li class='text-sm lg:text-base m-2 font-primary text-white w-full'>Front-end: React, HTML5, CSS3, JavaScript, SPA, Context API</li>
            <li class='text-sm lg:text-base m-2 font-primary text-white w-full'>Back-end: Node.js, Express, APIs REST,  SQL</li>
            <li class='text-sm lg:text-base m-2 font-primary text-white w-full'>Ferramentas: Git, Github</li>
            <li class='text-sm lg:text-base m-2 font-primary text-white w-full'>Em aprendizado: Typescript, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection