
import { useState } from "react"; 
import Articles from "../components/articlesHome"; 
import Container from "../components/container"; 
import Hero from "../components/hero" 
import { motion } from "framer-motion"; 


const Home = () => {
  // Declaración del estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Renderiza la página principal
  return (
    <main className="bg-[#f3f9fc] dark:bg-black">
      <section id="home" className="h-screen  bg-transparent  xl:grid-cols-8">
        <Container>
          <Hero // Renderiza el componente Hero
          /> 
        </Container>
      </section>

      <section id="articles" className="bg-transparent  min-h-screen pt-20 space-y-14"> 
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="font-bold font-sans text-5xl text-black dark:text-white select-none">
              All Articles
            </h2>
            {/* Buscador */}
            <motion.input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} // Actualiza searchTerm cuando el usuario escribe en el input
              placeholder="Search "
              className="outline-none rounded-lg w-[350px] xl:w-[300px] 2xl:w-[350px] border-b-[1px] border-gray-500 py-1 px-5 shadow-sm dark:shadow-lg shadow-gray-500 dark:bg-zinc-800 dark:text-white dark:border-gray-300 dark:shadow-gray-600 "
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.5, duration:0.5}}
              variants={{
                  hidden:{opacity:0, x: 100},
                  visible:{opacity:1, x:0}
              }}
            />
          </div>
        </Container>
        
        <Container>
          <Articles searchTerm={searchTerm}  // Renderiza el componente Articles con searchTerm como prop
          />
        </Container>
      </section>
    </main>
  );
};

// Exportando el componente para su uso en otras partes de la aplicación
export default Home;
