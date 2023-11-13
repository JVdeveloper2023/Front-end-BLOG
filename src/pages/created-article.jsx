
import Container from "../components/container"
import { FormArticle } from "../components/formArticle";
import { motion } from "framer-motion";



const CreateArticle = () => {
   
  return (
    <main className="bg-[#f3f9fc] dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-black">
    
    <section id="form" className="bg-transparent  w-full h-screen pt-20">
      <Container className=" h-full">
        <div className="flex flex-col ">
          
          <div className=" flex flex-col  gap-10 ">
              
              <div>
                <h1 className="text-center text-4xl md:text-7xl lg:text-4xl xl:text-6xl font-bold text-black dark:text-white "
                
                >
                  Share your Article
                </h1>
              </div>
              {/* form */}
             <motion.div className="bg-[#c9e4ee] border-[1px]  rounded-2xl   dark:bg-zinc-900/30 text-black dark:text-gray-100 dark:border-none flex justify-start p-2   "
             initial="hidden"
             whileInView="visible"
             viewport={{once: true, amount: 0.5}}
             transition={{delay:0.4, duration:0.5}}
             variants={{
                 hidden:{opacity:0, x:-50},
                 visible:{opacity:1, x:0}
             }}
             >
              <FormArticle/>
             </motion.div>

          </div>

        </div>
      </Container>
    </section>
   
   
    </main>
  );
};

export default CreateArticle;
 