
import Container from "./container" 
import { useState } from 'react'; 
import { MainMenu } from "./main-menu" 
import { RiMenu3Line } from 'react-icons/ri'; 
import MenuMobile from './menu-mobile'; 
import { NavLink } from "react-router-dom"; 
import { Link as ScrollLink } from 'react-scroll';


export const Header = () => {
  // Declaración del estado para mostrar el menú
  const [showMenu, setShowMenu] = useState(false);

  
  return (
    <>
      <header className="fixed letf-0 top-0 w-full py-2 z-50 bg-[#ADD8E6]  dark:bg-zinc-950 dark:border-b-[1px] dark:border-zinc-800 ">
        <Container className= "flex items-center justify-between" >
          <section>
            <ScrollLink to="home" smooth={true} duration={500}> 
              <NavLink to="/" className="text-black text-bold text-2xl font-mono dark:text-white ">
                NewsyNook
              </NavLink>
            </ScrollLink> 
          </section>
          <section className="hidden lg:block">
            <MainMenu // Renderiza el menú principal
            /> 
          </section>
          <section className="lg:hidden">
            <button
              type='button'
              onClick={() => setShowMenu(true)}
              className='text-black dark:text-white'
              aria-label='Abrir menú'
            >
              <RiMenu3Line size={24}/> 
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} // Renderiza el menú móvil
      /> 
    </>
  )
}
