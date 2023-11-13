// Importando las dependencias necesarias
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Loader from './loader'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/effect-creative'; 
import { Autoplay, Navigation, EffectCreative} from 'swiper/modules'; 

const Slider = () => {
  // Declaración de estados para los artículos y el estado de carga
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para cargar los artículos cuando el componente se monta
  useEffect(() => {
    fetch('https://api-blog-kgga.onrender.com/api/articles/123') // Llamada a la API para obtener los artículos
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles); // Guarda los artículos en el estado
        setIsLoading(false); // Establece isLoading en false para indicar que los artículos se han cargado
      });
  }, []);

  // Duplica las diapositivas si hay menos de 2
  let slides = articles;
  if (articles.length < 2) {
    slides = [...articles, ...articles];
  }

  // Si los artículos aún se están cargando, muestra un indicador de carga
  if (isLoading) {
    return <div><Loader/></div>;
  }

  // Renderiza el carrusel de artículos
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay, Navigation, EffectCreative]}
    >
      {slides.map((article) => (
        <SwiperSlide key={article._id} className='flex items-center justify-center '>
          <div className='w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[380px] lg:h-[380px]    xl:w-[550] xl:h-[450px] 2xl:w-[520px] flex     items-end justify-between rounded-xl pb-1 px-0 bg-cover  bg-white dark:bg-black ' 
               style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className='bg-black/80 px-8 py-2 text-white text-xl font-semibold select-none'>
              New Article <span className='text-bold text-2xl'>!</span>
            </div>
            <div className='bg-black/80 px-8 py-[10px] text-white text-xl font-semibold border-[1px] border-transparent hover:bg-blue-600/80 hover:border-black'>
              <Link to={`/article/${article._id}`} >
                Readme
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Slider;
