

const SocialMediaLink = (props) => {
    const {className, href , socialMediaIcon , socialMediaName} = props
    return(
        
        <a href={href} target="_blank" rel='noopener noreferrer' className={`${className} text-brand-strongbrown p-2 rounded-md bg-brand-white text-sm md:text-md font-primary font-bold mx-4 hover:text-brand-lightbrown transition-colors duration-300`}>
            <img src={socialMediaIcon} className="w-4 h-4 md:w-6 md:h-6 mr-2 inline-block" alt={socialMediaName} />           
            {socialMediaName}</a>
    )
}

export default SocialMediaLink