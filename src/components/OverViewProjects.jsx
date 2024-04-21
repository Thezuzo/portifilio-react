import "../styles/components/overviewprojects.sass"
import { AiOutlineClose } from "react-icons/ai";

//components
import ProjectsContainer from "./ProjectsContainer";

//imagens
import hdc from "../img/hDC.png"
import count from "../img/count-text.jpg"
import weather from "../img/weather.png"
import auth from "../img/auth.jpg"
import quiz from "../img/quiz.png"
import wait from "../img/wait.png"

const OverViewProjects  = ({ buttonState }) => {

    
    
    const projects = [
        {
            nameProject: "HdC Host",
            desc: "Um projeto simples somente com CSS e HTML",
            img: hdc,
            link: "https://github.com/Thezuzo/hDC-Host.git",
            seeHow: ""
        },
        {
            nameProject: "Weather App",
            desc: "Uma aplicação para consumo de api que verifica o clima",
            img: weather,
            link: "https://github.com/Thezuzo/Weather-app.git",
            seeHow: ""
        },
        {
            nameProject: "auth user",
            desc: "Uma API que faz autenticação e criação de usuario em um banco de dados mongoDB usando NodeJs",
            img: auth,
            link: "https://github.com/Thezuzo/hDC-Host.git",
            seeHow: ""
        },
        {
            nameProject: "Quiz App",
            desc: "Um quiz sobre conhecimentos em programação feito em React",
            img: quiz,
            link: "https://github.com/Thezuzo/React---Quiz.git",
            seeHow: "https://thezuzo.github.io/React---Quiz/"
        },
        {
            nameProject: "Count Text",
            desc: "Um contador de palavras e frases",
            img: count,
            link: "https://github.com/Thezuzo/Count-text.git",
            seeHow: "https://superb-lebkuchen-e27402.netlify.app/"
        },
        {
            nameProject: "Em construção",
            desc: "Volte em breve para ver minhas atualiações",
            img: wait,
            link: "https://github.com/Thezuzo",
            seeHow: ""
        },
        {
            nameProject: "Em construção",
            desc: "Volte em breve para ver minhas atualiações",
            img: wait,
            link: "https://github.com/Thezuzo",
            seeHow: ""
        },
        {
            nameProject: "Em construção",
            desc: "Volte em breve para ver minhas atualiações",
            img: wait,
            link: "https://github.com/Thezuzo",
            seeHow: ""
        },
    ]


    return (
        <div className=''>
            <section className="overlay">
            <button className="exit" onClick={() => buttonState(true)}>
            <AiOutlineClose />
            </button>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="modalCard">
                            <h3>{project.nameProject}</h3>
                            <img src={project.img} alt={project.nameProject} />
                            <p>{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                            {project.seeHow && <a href={project.seeHow} target="_blank">Veja</a>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default OverViewProjects;
