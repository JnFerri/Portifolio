import imageLandingPage from '../../../Assets/Images/landing-page.png'
import imageSpa from '../../../Assets/Images/SPA.png'
import imageApi from '../../../Assets/Images/cloud-api.png'
import imageAnaliseDados from '../../../Assets/Images/analise_dados.png'
import SkillCard from '../SkillCard/SkillCard.js'

const skillList = [
    {
        title:'LANDING PAGES',
        description:'Crio landing pages modernas, responsivas e otimizadas para conversão, focadas na melhor experiência do usuário.',
        image:imageLandingPage
    },
    {
        title:'SINGLE PAGE APPLICATIONS',
        description:'Desenvolvo aplicações dinâmicas e rápidas em SPA, garantindo navegação fluida e interativa.',
        image:imageSpa
    },
    {
        title:'API REST',
        description:'Implemento e consumo APIs REST eficientes, seguras e escaláveis, integrando diferentes sistemas com precisão.',
        image:imageApi
    },
    {
        title:'ANÁLISE DE DADOS',
        description:'Transformo dados em insights através de técnicas de análise e visualização, apoiando decisões estratégicas.',
        image:imageAnaliseDados
    }
]


const CardList = (props) => {
    return(
        <div class={`w-full h-full flex justify-between items-center flex-wrap gap-4 ${props.isVisible ? 'animate-slide-up' : null} `}>
        {skillList.map(skill => 
            <SkillCard  title={skill.title} description={skill.description} image={skill.image}/>
)}            
        </div>
    )
}

export default CardList