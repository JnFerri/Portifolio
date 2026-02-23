
const NavBar = ({ activeSection, IsMenuScrollTop }) => {


  const links = [
    {
      description:'Sobre mim',
      href:'#sobre'
    },
    {
      description:'Habilidades',
      href:'#habilidades'
    },
    {
      description:'Projetos',
      href:'#projetos'
    },
    
    {
      description:'Contato',
      href:'#contato'
    }
  ]

  return(
    <nav class='flex items-center justify-between w-[100%] m-2 lg:w-2/4 xl:w-2/4 2xl:w-1/3 bg-opacity-0 z-10'>
      <ul className='flex justify-between items-center w-full '>
        {
          links.map((link) => {
            return(
              <li key={link.description} class=' w-auto lg:w-auto flex items-center' >
                <a href={link.href} class={`text-brand-white  text-2xl ${IsMenuScrollTop === false ? null : 'text-shadow-lg'}  hover:scale-110 font-primary font-bold text-center w-full ${activeSection === link.href.substring(1) ? 'bg-brand-white rounded-md p-2 text-brand-strongbrown'  : ''} `}>{link.description}</a>
              </li>
            )

          })
        }
      </ul>
    </nav>
  )
}

export default NavBar;