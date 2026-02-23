import Typhografy from "../../typhografy/Typhografy";


const SkillCard = ({image,title, description}) => {
    return(
        <div class=' w-[45%] lg:w-[48%] h-[40%] m-0 bg-brand-lightbrown flex flex-col justify-between rounded-3xl'>
            <div class='w-full h-[100%] p-2 bg-brand-green flex flex-col items-center  rounded-t-3xl rounded-r-3xl'>
            <img class='w-1/4 h-auto m-2' src={image} alt="Imagem Habilidade"></img>
            </div>
            <div class=' flex flex-col items-center h-[100%] w-full'>
            <Typhografy variant="h3" class='text-text-primary text-center font-bold w-full text-base lg:text-xl font-primary p-2'> {title} </Typhografy>
            <Typhografy variant="p" class='text-text-primary text-sm text-center font-primary  w-full h-full p-2'> {description} </Typhografy>
            </div>
        </div>
    )
};




export default SkillCard;