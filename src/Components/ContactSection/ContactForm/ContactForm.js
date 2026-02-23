import Typhografy from "../../typhografy/Typhografy"


const ContactForm = (props) => {
    const {className} = props
    
    

    return(
        <form
        action="https://formspree.io/f/mreaojwo"
        method="POST"
        className={`${className}  w-full h-full flex flex-col items-center justify-center bg-brand-strongbrown rounded-lg p-4 my-4`}>
            <Typhografy variant = 'h4' class='text-lg lg:text-xl font-primary text-white mb-4 w-full text-center'>Entre em contato comigo por email:</Typhografy>
            <label class="text-white font-primary text-md lg:text-lg text-left" >Nome:</label>
            <input type="text" name='name' required placeholder="Nome" class="w-full h-12 rounded-md px-4 py-2 mb-4  focus:outline-none focus:ring-2 focus:ring-brand-green"/>
            <label class="text-white font-primary text-md lg:text-lg text-left" >Email:</label>
            <input type="email" name='email' placeholder="Email" class="w-full h-12 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-brand-green"/>
            <label class="text-white font-primary text-md lg:text-lg  text-left" >Mensagem:</label>
            <textarea name='message' required placeholder="Mensagem" class="w-full h-32 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"></textarea>
            <button type="submit" class="bg-brand-brown text-lg text-white w-[80%] md:w-[50%] lg:w-[40%] py-4 rounded-md hover:bg-brand-lightbrown my-4 transition-colors duration-300">Enviar Email</button>
        </form>
    )
}

export default ContactForm