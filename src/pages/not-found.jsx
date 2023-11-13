import { Link } from "react-router-dom"
import Container from "../components/container"
import {motion} from "framer-motion"


const NotFound = () => {
  
  return (
    <main className="bg-[#f3f9fc]  dark:bg-black">
    
    <Container className="h-screen w-full ">

      <div className="flex py-14 h-full ">       
        <div className="flex flex-col h-full w-full justify-center items-start gap-3">
              <motion.h2 
              className="font-bold text-7xl dark:text-white/90"
              initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y: -100},
                        visible:{opacity:1, y:0}
                    }}
              >
                Ooops...
              </motion.h2>
              <motion.h2 
              className="font-base text-6xl text-gray-600 dark:text-gray-400"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.6, duration:0.5}}
              variants={{
                  hidden:{opacity:0, y: -100},
                  visible:{opacity:1, y:0}
              }}
              >
                Page not found
              </motion.h2>
              
              <motion.p 
              className="text-2xl text-gray-500"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.7, duration:0.5}}
              variants={{
                  hidden:{opacity:0, y: -100},
                  visible:{opacity:1, y:0}
              }}
              >
                The page you are looking for doesnt exist or an error occured, go back to home page
              </motion.p>
              <motion.div 
              className="mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.8, duration:0.5}}
              variants={{
                  hidden:{opacity:0, y: -100},
                  visible:{opacity:1, y:0}
              }}
              >
                <Link to={'/'} className="bg-blue-600 text-white text-4xl rounded-full px-10 py-0 border-2 border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600" >
                Go Back 
                </Link>
              </motion.div>
        </div>
        <div className="relative h-full w-full">
            <motion.img 
            src="https://res.cloudinary.com/dllbgwjij/image/upload/v1699642225/BLOG/front-end/nvvl0rgda7x0ail3qfuo.png" 
            alt="imagen error 404"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
                hidden:{opacity:0, y: -100},
                visible:{opacity:1, y:0}
            }}
            />
            
        </div>
      </div>
    </Container>
    </main>
  )
}

export default NotFound