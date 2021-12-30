import "./Intro.scss"
import {Computer} from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            
            <div class="left">
                <Computer classname="icon" style={{fontSize:250}}/>
            </div>
            <div class="right">
                <h1>Hi, I'm Nikki Singh</h1>
                <h5>An enthusiast looking for oppurtunities to grow.</h5>
                <a href="#work" className="btn">My Work</a>
            </div>

        </div>
        
    )
}
