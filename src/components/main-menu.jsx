
import { NavLink } from "react-router-dom"; // Componente NavLink de React Router para la navegación
import { Link as ScrollLink } from 'react-scroll'; 
import { DarkMode } from "./dark-mode" 


export const MainMenu = () => {
  // Renderiza el menú principal
  return( 
    <ul className="flex flex-col gap-5  items-center justify-center lg:flex-row lg:gap-10">
      <li className="flex justify-center items-center">
        <ScrollLink to="home" smooth={true} duration={500}> 
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'font-bold font-sans text-black text-base dark:text-white '  : 'text-black font-semibol  text-sm font-sans dark:text-gray-300 '}
          >
            Home
          </NavLink>
        </ScrollLink> 
      </li>

      <li  className="flex justify-center items-center">
        <NavLink
          to="/create-article"
          className={({ isActive }) => isActive ? 'font-bold font-sans text-black text-base  dark:text-white e '  : 'text-black font-semibol text-sm font-sans dark:text-gray-300 '}
        >
          You Article
        </NavLink>
      </li>

      <li>
        <DarkMode/> 
      </li>
    </ul>
  )
}
