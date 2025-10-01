import logo from '../../../Assets/Images/logoDev.png'



const NavBar = (props) =>{
  const links = [
    {
      nome:'home',
      href:'/'
    },
    {
      nome:'sobre',
      href:'/sobre'
    },
    {
      nome:'contato',
      href:'/contato'
    },
    {
      nome:'login',
      href:'/login'
    }
  ]

  return(
    <nav class='flex items-center justify-between w-full px-8 py-1 m-0 bg-opacity-0'>
      <div class='bg-white p-8 rounded-full w-32 h-32 flex justify-center items-center' >
      <img src={logo} class='w-full' />
      </div>
      <ul className='flex justify-center items-center w-1/3 '>
        {
          links.map((link) => {
            return(
              <li key={link.nome} class=' w-1/4' >
                <a href={link.href} class='text-brand-white text-xl font-primary font-bold text-center w-full'>{link.nome}</a>
              </li>
            )

          })
        }
      </ul>
    </nav>
  )
}

export default NavBar;