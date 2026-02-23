import Carousel3DProjects from "./Carousel3DProjects/Carousel3DProjects";
import imagemQuiz from '../../Assets/Images/quiz.png'
import imagemAntigoPortifolio from '../../Assets/Images/antigo_portifolio.png'
import imagemTvCorp from '../../Assets/Images/tv-corporativa.png'
import Typhografy from "../typhografy/Typhografy";
import useScrollObserverAnimation from "../../Hooks/useScrollObserverAnimation";
import useActiveSectionObserver from "../../Hooks/IsActiveSection";

const ProjectsSection = (props) => {
  const {id, setActiveSection} = props
  const { ref : visibilityRef, isVisible } = useScrollObserverAnimation()
  const activeRef = useActiveSectionObserver(id, setActiveSection)

  // unir os dois refs
  const combinedRef = (element) => {
    visibilityRef.current = element
    activeRef.current = element
  }

  const carouselImages = [
    {
      src: `${imagemTvCorp}`,
      title: "Tv Corporativa",
      description: "Sistema de controle de anuncios em tv's corporativas."
    },
    {
      src: `${imagemAntigoPortifolio}`,
      title: "Antigo Portifólio",
      description: "Antigo portifólio de inicio de carreira."
    },
    {
      src: `${imagemQuiz}`,
      title: "Quiz",
      description: "Quiz para utilização em eventos e captura de Leads."
    }
  ];



  return (
    <section id={id} ref={combinedRef} class={` scroll-mt-[10vh] h-[90vh] md:h-[90dvh] landscape:md:h-[150dvh] landscape:xl:h-[90dvh] landscape:scroll-mt-[15vh] lg:scroll-mt-[10vh] lg:h-[90vh] bg-gradient-to-b from-[#332214] to-[#3b4e4c]  w-full  flex flex-col items-center justify-between`} >
      <Typhografy variant="h2" class='text-6xl mt-4 font-primary text-white w-full font-bold text-center'>Projetos</Typhografy>
      <div class={`w-full h-4/5 flex flex-col items-center justify-end `}>
      <div class={`w-full h-full  `}>
      <Carousel3DProjects isVisible={isVisible} class={`w-full h-full `} images={carouselImages} />
      </div>
      <div class='w-[98%] h-[30%] xl:h-[10%] flex xl:items-end items-center justify-center xl:justify-end '>
        <a href='#contato' class={`text-base lg:text-base 2xl:text-lg font-primary text-white w-[90%] xl:w-[20%] h-auto text-center p-2 rounded-md bg-brand-brown bg-opacity-80 hover:bg-opacity-100 transition-opacity duration-300 ${isVisible ? 'animate-fade-in' : null}`}>Entre em contato</a>
      </div>

      </div>
    </section>
  )
}

export default ProjectsSection