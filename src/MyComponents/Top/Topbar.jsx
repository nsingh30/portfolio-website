import "./Top.scss";

export default function Topbar({open}) {
    return (
        <div open={open} className={open? "topbar" : "topbarclose"}>
            <ul className='ul'>
                <li className='li'>
                    <a href="#intro" className="active">HOME</a>
                </li>
                <li className='li'>
                    <a href="#work">PROJECTS</a>
                </li>
                <li className='li'>
                    <a href="#about">ABOUT ME</a>
                </li>
                <li className='li'>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    )
}
