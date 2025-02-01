import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-secondary">Fadwa QAROUACH</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                Je suis une développeuse fullstack avec une expertise en Python, JavaScript, React et Node.js. 
                <br /> Forte de plusieurs expériences en développement web et administration systèmes, je suis passionnée par la cybersécurité et les solutions cloud. 
                <br /> Contactez-moi si vous avez besoin de mes services !
                </p>
                <a href="mailto:qarouach.fadwa@gmail.com" className=" btn btn-base-content md:w-fit">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>

            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className=" object-cover border-8 border-secondary shadow-xl" 
                style={{
                    borderRadius : "49% 51% 69% 31% / 69% 46% 54% 31% "
                }}
                />
            </div>
        </div>
    )
}

export default Home
