// Importando las dependencias necesarias
import { useEffect, useState } from "react"; // Hooks de React para manejar el estado y los efectos secundarios
import { RiSunFill,RiMoonFill } from "react-icons/ri"; // Iconos de sol y luna de la biblioteca de iconos React Icons

// Definición del componente DarkMode
export const DarkMode = () => {
  // Declaración del estado para el tema
  const [theme, setTheme] = useState(() => {
    // Comprueba las preferencias del sistema para el color del tema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  // Efecto para aplicar el tema cuando el componente se monta o cuando el tema cambia
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark"); // Aplica el tema oscuro
    } else {
      document.querySelector("html").classList.remove("dark"); // Aplica el tema claro
    }
  }, [theme]);

  // Función para cambiar el tema
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Cambia el tema al opuesto del tema actual
  };

  // Renderiza un botón que muestra el icono de sol o luna dependiendo del tema y cambia el tema al hacer clic
  return (
    <button className=" border-transparent border-b-2 py-1   "
    onClick={handleChangeTheme}>
        {theme === "dark" ? 
            <RiMoonFill className="e w-6 h-6 text-black/70 hover:text-black dark:text-gray-200 dark:hover:text-white"/> 
            : 
            <RiSunFill className="e w-6 h-6 text-black/70 hover:text-black dark:text-gray-200 dark:hover:text-white"/>
        }
    </button>
  )
}
