
import { cn } from "../libs/utils"; // Función de utilidad para la concatenación de nombres de clases
import PropTypes from 'prop-types'; // Biblioteca PropTypes para la verificación de tipos de props
import { MainMenu } from "./main-menu"; 

// Definición de los tipos de las props
MenuMobile.propTypes = {
    isOpen: PropTypes.bool, // Indica si el menú móvil está abierto
    onClose: PropTypes.any, // Función para cerrar el menú móvil
};

// Definición del componente MenuMobile
function MenuMobile({ isOpen, onClose }) {
    // Genera los nombres de las clases en función de si el menú móvil está abierto
    const classes = cn('fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 border-r-[1px] border-white bg-[#ADD8E6] dark:bg-zinc-950 flex items-center justify-center transition-all duration-300 ease-in-out',
    !isOpen ? '-left-full' : 'left-0');

    // Renderiza el menú móvil y un div que cierra el menú al hacer clic
    return (
        <>
            <div className={classes}>
                <MainMenu // Renderiza el menú principal
                /> 
            </div>
            <div
                onClick={onClose} // Cierra el menú al hacer clic
                className={cn(
                'fixed left-0 top-0 w-full h-full bg-black/30 z-40',
                !isOpen ? 'hidden' : 'block' // Se oculta si el menú móvil no está abierto
                )}
            />
        </>
    );
}


export default MenuMobile;
