import "./Contact.scss"
import {Mail, GitHub} from "@material-ui/icons"

export default function Contact() {
    
    return (
        <div className='contact' id='contact'>

            <div className="itemContainer">
                <h1>
                    Get in touch
                </h1>
                <h4>
                    If you find my work interesting, email me.
                </h4>
                <div className="item">
                    
                        <a href={'mailto:nikkisinghcs@gmail.com'}><Mail className="mail"/></a>
                    
                    
                        <a href="http://github.com/nsingh30" target="_blank"><GitHub className="github"/></a>
                    
                </div>    
            </div>
            
        </div>
    )    
}
