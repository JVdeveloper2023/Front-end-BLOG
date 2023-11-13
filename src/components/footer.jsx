import Container from "./container"
import { RiFacebookFill,RiWhatsappFill,RiInstagramFill,RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (

    <footer className='bg-[#ADD8E6] dark:bg-zinc-950  '>
        <Container className="flex flex-col justify-center items-center gap-5 py-10 dark:text-white ">

            <div className="flex flex-row gap-4">
                <span>
                <RiFacebookFill className="w-10 h-10 p-2 rounded-full   border-[1px]  hover:text-blue-700 hover:border-blue-700    dark:border-gray-400 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-500 "/>
                </span>
                <span>
                <RiWhatsappFill className="w-10 h-10 p-2 rounded-full   border-[1px] hover:text-green-700 hover:border-green-700  dark:border-gray-400 dark:text-gray-400 dark:hover:text-green-400 dark:hover:border-green-400 "/>
                </span>
                <span>
                <RiInstagramFill className="w-10 h-10 p-2 rounded-full   border-[1px] hover:text-pink-700 hover:border-purple-700   dark:border-gray-400 dark:text-gray-400 dark:hover:text-pink-400 dark:hover:border-purple-700 "/>
                </span>
                <span>
                <RiGithubFill className="w-10 h-10 p-2 rounded-full   border-[1px]  hover:border-black dark:border-gray-400 dark:text-gray-400 dark:hover:text-white dark:hover:border-white "/>
                </span>
            </div>
            <div>
            <h5 className="font-semibold">&copy; JVdevoloper All Rights Reserved</h5>
            </div>

        </Container>
        </footer>
  )
}

export default Footer