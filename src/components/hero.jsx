import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Slider from './slider';
import { motion } from "framer-motion"

const Hero = () => {

  return (

        <div className="grid grid-cols-1 lg:grid-cols-4 pt-0 min-h-screen w-full">
            {/* CONTENT */}
            <div className="flex flex-col pt-20  items-center  justify-center  lg:col-span-2  lg:justify-center lg:pt-20 xl:pt-0  ">
                <div className="space-y-6 md:space-y-10 lg:space-y-5 xl:space-y-10 2xl:space-y-10 ">
                    <motion.h2 className="font-bold text-5xl md:text-7xl lg:text-5xl xl:text-7xl dark:text-white select-none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x: -100},
                        visible:{opacity:1, x:0}
                    }}
                    >
                    Welcome to your corner of casual reading  
                    </motion.h2>
                    <motion.p className="text-xl dark:text-gray-400 select-none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x: -100},
                        visible:{opacity:1, x:0}
                    }}
                    >
                     Browse our collection of fun, intriguing, and relaxing articles. There’s something for every moment of the day!
                    </motion.p>
                    <motion.div className="flex flex-col  gap-4 md:flex-row md:gap-8 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x: -100},
                        visible:{opacity:1, x:0}
                    }}
                    >
                        <ScrollLink to="articles" smooth={true} duration={500} className='cursor-pointer w-full text-center font-semibold text-xl border-2 border-transparent text-white bg-black py-2 px-6 rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 dark:text-white dark:bg-black dark:border-white dark:hover:text-black dark:hover:bg-white dark:hover:border-black'>
                            See Articles
                        </ScrollLink>
                        <Link to="/create-article" className='w-full text-center font-semibold text-xl text-white border-2 border-transparent transition duration-300 bg-blue-600 px-6  py-2 rounded-xl hover:bg-white hover:text-blue-600 hover:border-blue-600'>
                            Write your Article!
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* SLIDER */}        
            <motion.div  className="hidden  lg:flex   lg:col-span-2 items-center lg:justify-center lg:pt-20 xl:pt-0 2xl:pt-0 overflow-x-hidden lg:ml-[100px]   xl:ml-[150px] "
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
                hidden:{opacity:0, x:100},
                visible:{opacity:1, x:0}
            }}
            >            
              <Slider/> 
           
            </motion.div>
            
        </div>
  )
}

export default Hero