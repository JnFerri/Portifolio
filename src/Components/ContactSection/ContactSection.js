
import Typhografy from "../typhografy/Typhografy"
import useScrollObserverAnimation from "../../Hooks/useScrollObserverAnimation";
import useActiveSectionObserver from "../../Hooks/IsActiveSection";

const ContactSection = (props) => {
  const { ref : visibilityRef, isVisible } = useScrollObserverAnimation()
  const {id,setActiveSection} = props
  const activeRef = useActiveSectionObserver(id, setActiveSection)

 
  const combinedRef = (element) => {
    visibilityRef.current = element
    activeRef.current = element
  }


  return (
    <section  id={id} ref={combinedRef} class={` scroll-mt-[10vh] h-[90dvh] landscape:md:scroll-mt-[15vh] landscape:lg:scroll-mt-[10%] landscape:md:h-[250dvh] landscape:lg:h-[90dvh] lg:scroll-mt-[10%] lg:h-[90dvh] bg-brand-green w-full  flex flex-col items-center justify-between `}>
      <Typhografy variant="h2" class={`text-6xl mt-4 font-primary text-white w-full font-bold text-center ${isVisible ? "animate-slide-up" : null} `} >Contato</Typhografy>
      <div class={`w-[calc(100%-2rem)] h-full  xl:h-[90%] flex-col lg:flex-row flex items-center lg:justify-between ${isVisible ? "animate-slide-up" : null}`}>
        
      </div>
      
    </section>
  )
}

export default ContactSection