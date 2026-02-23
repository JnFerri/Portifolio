
import imgBanner from '../../../Assets/Images/bannerImage.jpg'
import Typhografy from '../../typhografy/Typhografy'


const Banner = (props) => {
  
  const {isVisible} = props


    return(
        <div className="flex w-full h-[100%] landscape:md:h-full landscape:lg:h-full lg:h-screen flex-col  justify-end items-center   ">
  <img 
    class="h-[90%] landscape:md:h-[150dvh] landscape:lg:h-full lg:h-full w-full object-cover object-top absolute lg:top-0 left-0"
    src={imgBanner}
    alt="banner"
  />
  
    <div className= ' flex h-1/3 sm:h-1/5 lg:h-1/4 w-[98%] lg:w-[60%] justify-end flex-col bg-brand-strongbrown z-10 bg-opacity-60 rounded-tr-xl rounded-tl-xl  ' >
      <div className = {`flex flex-col w-80% items-center lg:justify-end justify-center ${isVisible ? 'animate-slide-up' : null} `}>
      <Typhografy variant='h1' className='text-brand-white font-secondary text-center text-5xl  xl:my-0 md:text-4xl lg:text-5xl xl:text-7xl 3xl:text-8xl z-10 w-full  font-bold text-shadow-lg '> Desenvolvedor FullStack</Typhografy>
      </div>
      <div className = 'flex flex-col lg:w-auto w-60% m-0  justify-end h-full' >
        <Typhografy variant='h1' className={` text-brand-white font-secondary  text-xl  lg:text-2xl   z-10 w-full font-normal h-auto text-center p-2 text-shadow-md ${isVisible? 'animate-fade-in' : null}`}> Transformando ideias em experiências digitais únicas.</Typhografy>
      <Typhografy variant='h1' className={`text-brand-white font-secondary  text-lg  lg:text-xl    z-10 w-full font-light italic h-auto text-center p-2 text-shadow-md  ${isVisible ? 'animate-fade-in' : null}`}>Jean Ferri</Typhografy>
      </div>
      
    </div>
  
    
  
</div>
    )
}

export default Banner