import NavBar from "./NavBar/NavBar"
import logo from '../../Assets/Images/logoDev.png'
import Banner from "./Banner/Banner"
import useScrollObserverAnimation from "../../Hooks/useScrollObserverAnimation";
import MenuPhone from "./MenuPhone/MenuPhone";
import {  useEffect, useState } from "react";
import useActiveSectionObserver from "../../Hooks/IsActiveSection";
//import { useIsProcessing } from "../../Context/IsProcessingContext";

const Header = (props) => {
  const {activeSection, id,setActiveSection} = props
  const {ref,isVisible} = useScrollObserverAnimation()
  //const [IdActivateButtonMenu, setIdActivateButtonMenu] = useState(null)
   //const [IsProcessing , setIsProcessing] = useIsProcessing()
  const [IsMenuScrollTop, setIsMenuScrollTop] = useState(null)
  
  const activeRef = useActiveSectionObserver(id, setActiveSection)

  // unir os dois refs
  const combinedRefHome = (element) => {
    ref.current = element
    activeRef.current = element
  }
  

 
   useEffect(() => {
    const handleScroll = () => {
      setIsMenuScrollTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 /* const HandleActivateButtonMenu = (id) => {
        if(IsProcessing === true) {
            return
        }
        setIsProcessing(true)
        setIdActivateButtonMenu(id)
        setIsProcessing(false)
    } */

    return (
    <header id={id}  ref={combinedRefHome} class = 'flex items-center flex-col scroll-mt-[10vh] landscape:md:scroll-mt-[15vh] landscape:lg:scroll-mt-[10vh] landscape:md:h-[150dvh] landscape:lg:h-[100dvh] h-[calc(93vh)] lg:scroll-mt-[10vh] lg:h-[calc(100vh)]  w-full m-0 p-0'  onScroll={() => {window.scrollY === 0 ? setIsMenuScrollTop(true) : setIsMenuScrollTop(false)}} >
     <div class = {`flex items-center justify-between w-[100%] lg:w-[100%] h-[10%] landscape:md:h-[15%] landscape:lg:h-[10%] fixed lg:top-0 lg:left-0 p-2 m-0 bg-opacity-100 bg-brand-brown ${IsMenuScrollTop === true || IsMenuScrollTop === null ? 'lg:bg-opacity-0' : 'lg:bg-opacity-100'} z-50`}>
      <a class='bg-white p-1 rounded-full w-auto h-[75%] lg:h-[98%] flex justify-center items-center z-10 ' href='#home' /*onClick={() => {HandleActivateButtonMenu(null)}} */>

      <img src={logo} class={` h-[90%] w-auto lg:w-auto  lg:h-[90%]  lg:z-20 `} alt="Logo" />
      </a>
      {
        window.innerWidth > 1024 ? <NavBar activeSection={activeSection} IsMenuScrollTop={IsMenuScrollTop}/> : <MenuPhone /*IdActivateButtonMenu = {IdActivateButtonMenu}*/ activeSection={activeSection}/*HandleActivateButtonMenu={HandleActivateButtonMenu}*//>
      }
         
    </div>
    

    <Banner isVisible={isVisible}/>

    </header>
    )
}

export default Header