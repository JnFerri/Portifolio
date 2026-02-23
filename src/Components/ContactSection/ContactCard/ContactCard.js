import Typhografy from "../../typhografy/Typhografy"
import iconLinkedin from "../../../Assets/Images/linkedin.png"
import iconGithub from "../../../Assets/Images/github.png"
import iconWhatsapp from "../../../Assets/Images/whatsapp.png"
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink"
import avatarImg from "../../../Assets/Images/characterAvatar.png"

const ContactCard = (props) => {
    const {className} = props

    const socialMediaLinks = [
        {
            name: "LinkedIn",
            icon: iconLinkedin,
            href: "https://www.linkedin.com/in/jnferri"
        },
        {
            name: "GitHub",
            icon: iconGithub,
            href: "https://github.com/JnFerri"
        },
        {
            name: "WhatsApp",
            icon: iconWhatsapp,
            href: "https://wa.me/5549998116251"
        }
    ]
    return(
        <div className={`${className} w-full h-full lg:flex flex-col my-4 lg:flex-row lg:my-0 justify-center items-center`}>
            <div className="flex self-start flex-col items-center justify-between bg-brand-strongbrown rounded-lg w-full h-[50%] p-4 lg:translate-x-[10%]">
                <Typhografy variant="span" className='text-md font-primary text-white w-[90%] flex my-1 items-center text-center'>Buscando um desenvolvedor para sua equipe ou para um projeto específico? Vamos conversar! </Typhografy>
                <Typhografy variant="span" className='text-md font-primary text-white w-[90%] flex my-1 items-center text-center'>Entre em contato pelo formulário ou pelas minhas redes sociais.</Typhografy>
                <div className="w-full h-full flex items-center justify-center my-2">
                   { socialMediaLinks.map((link) => {
                    return(
                        <SocialMediaLink key={link.name} href={link.href} socialMediaIcon={link.icon} socialMediaName={link.name} className="ms-4"/>
                    )
                   })}
                </div>
            </div>
            {
                window.innerWidth >= 1024 ?
                <img src={avatarImg}  className="h-[60vh] self-end " alt='Avatar personagem represantando Jean Ferri, cabelos grandes de cor castanho claro e jaqueta de couro' />
                : null
            }

        </div>
    )
}

export default ContactCard