
import { useEffect, useState } from 'react'; 
import { RiArrowRightDoubleLine } from "react-icons/ri"; 
import { Link } from 'react-router-dom'; 
import Loader from './loader' 
import { motion } from 'framer-motion'; 
import PropTypes from 'prop-types'; 


const Articles =({ searchTerm }) => {
  // Declaración de estados para los artículos y el estado de carga
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Definición de los tipos de las props
  Articles.propTypes = {
    searchTerm: PropTypes.string.isRequired, // searchTerm debe ser una cadena
  };

  // Efecto para cargar los artículos cuando el componente se monta o cuando searchTerm cambia
  useEffect(() => {
    // Si searchTerm está vacío, carga todos los artículos
    if (searchTerm === "") {
      fetch('https://api-blog-kgga.onrender.com/api/articles') // Llamada a la API para obtener todos los artículos
        .then(response => response.json())
        .then(data => {
          setArticles(data.articles.map(article => ({...article, hover: false}))); // Guarda los artículos en el estado
          setLoading(false); // Establece loading en false para indicar que los artículos se han cargado
        })
        .catch(error => console.error(error)); // Manejo de errores
    } else { // Si no, realiza la búsqueda
      fetch(`https://api-blog-kgga.onrender.com/api/searcher/${searchTerm}`) // Llamada a la API para buscar artículos
        .then(response => response.json())
        .then(data => {
          if (data && data.search) {
            setArticles(data.search.map(article => ({...article, hover: false}))); // Guarda los resultados de la búsqueda en el estado
          } else {
            console.log('No articles found'); // Mensaje de consola si no se encontraron artículos
          }
        })
        .catch(error => console.error(error)); // Manejo de errores
    }
  }, [searchTerm]); // Dependencia del efecto: se ejecuta cada vez que searchTerm cambia

  // Si los artículos aún se están cargando, muestra un indicador de carga
  if (loading) {
    return <div className='flex items-center justify-center  '><Loader/></div>;
  }


  // Renderiza los artículos
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row justify-between  pb-10 ">
      {articles.map((article, index) =>(
        <motion.div key={article._id} className='flex flex-col  w-[350px] h-[430px]  xl:w-[300px] xl:h-[430px]  2xl:w-[350px] 2xl:h-[430px] mt-8 dark:mt-8 border-[1px] hover:shadow-2xl hover:shadow-black  border-white hover:border-black bg-[#F0F0F0] dark:bg-zinc-900  dark:border-[#1F2430] dark:hover:shadow-gray-200/30 dark:hover:shadow-2xl  dark:border-[1px] dark:hover:border-gray-500 '
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{type:'spring',stiffness: 50}}
          variants={{
              hidden:{opacity:0, y:100},
              visible:{opacity:1, y:0}
          }}
        >
          <div>
            <img 
              src={article.image}
              alt={article.title}
              className='w-[350px] h-[280px] 2xl:w-[350px] 2xl:h-[280px] object-fill'
            />
          </div>
          <div className=' flex flex-col justify-start   p-4  '>
            <p className='text-gray-500 text-xs select-none pb-1'>
              {new Date(article.date).toLocaleString("es-ES", {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})} 
            </p>
            <h2 className='text-black font-semibold text-2xl font-sans dark:text-white select-none ' style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {article.title}
            </h2>
            <p className='text-base text-justify select-none dark:text-white ' style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {article.content}
            </p>
            <div className='flex' onMouseEnter={() => {
                let newArticles = [...articles];
                newArticles[index].hover = true;
                setArticles(newArticles);
            }} onMouseLeave={() => {
                let newArticles = [...articles];
                newArticles[index].hover = false;
                setArticles(newArticles);
            }}>
              <Link to={`/article/${article._id}`} className='font-bold text-sm text-blue-600 mt-2 dark:text-blue-400 hover:underline decoration-1'>
                Read more...
                <motion.div className='relative'
                  animate={{ 
                    x: article.hover ? 150 : 0 
                  }}
                  transition={{ duration: 0.5 }} 
                >
                  <RiArrowRightDoubleLine className='absolute -translate-y-5 translate-x-24 w-8 h-6 top-0 left-0'/> 
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Articles;
