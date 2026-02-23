import aboutMeIcon from '../../../Assets/Images/information.png'
import skillIcon from '../../../Assets/Images/skill-development.png'
import projectsIcon from '../../../Assets/Images/project.png'
import contactIcon from '../../../Assets/Images/contact-us.png'


const MenuPhone = (props) => {
    const { activeSection} = props


    const MenuItems = [
        {
            id:'sobre',
            description:'Sobre mim',
            href:'#sobre',
            icon: aboutMeIcon
        },
        {
            id:'habilidades',
            description:'Habilidades',
            href:'#habilidades',
            icon: skillIcon
        },
        {
            id:'projetos',
            description:'Projetos',
            href:'#projetos',
            icon: projectsIcon
        },
        {
            id:'contato',
            description:'Contato',
            href:'#contato',
            icon: contactIcon
        },
    ]

    return (
        <div class = 'w-full h-full flex items-center justify-around'>
            {
                MenuItems.map((item) => {
                    return(
                    <a href={item.href} key={item.id} class ={`w-90% flex items-center justify-between p-2 rounded-md ${item.id === activeSection ? 'bg-white' : ''}`}   >
                        <img src={item.icon} alt={item.description} class={`w-10 h-10`} />
                        {
                            activeSection === item.id ? <span class='text-sm text-center w-[80%]' >{item.description}</span> : null
                        }
                    </a>
                )})
            }
        </div>

    )
} 

export default MenuPhone