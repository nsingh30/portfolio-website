import "./About.scss"
import {ArrowForwardIos, ArrowBackIos} from "@material-ui/icons"
import { useState } from "react";

export default function About() {
    const [currentSlide, setCurrentSlider] = useState(0);
    const data = [
        {
            id:"1",
            title:"About Me",
            desc: "Exposure to web development courses on various platforms has fascinated me to learn and develop more skills in this industry. I like to work with Java, HTML5, CSS3, JS, ReactJS. Courses in programming and computer sceince in school has provided me with basic coding skills and mindset to new technology.",
            // img: "../../design2.jpeg",
        },
        {
            id:"2",
            title:"Skills",
            desc: "Java, HTML5, CSS3, Sass, JavaScript, ReactJS, BootStrap, Wordpress, SQL",
            // img: "../../design.jpeg",
        },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlider(currentSlide === 0 ?0 : 0) : setCurrentSlider(currentSlide ===0 ? 1 : 1);
    }
    return (
        <div className='about' id='about'>
            <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
            {data.map(d => (
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">

                            <h2>{d.title}</h2>
                            <p>
                                {d.desc}
                            </p>
                            {/* <span>Skills</span> */}
                        </div>

                    </div>
                    {/* <div className="right">
                        <img src={d.img} alt=""/>
                    </div> */}
                </div>
            </div>))}
            </div>  
            <ArrowBackIos class="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIos class="arrow right" onClick={()=>handleClick("")}/>
            
        </div>
    )
}
