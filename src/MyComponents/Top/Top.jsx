import "./Top.scss"

import Mobiletop from "./Mobiletop"

export default function Top() {
    return (
        <div className='top' id='top'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className="logo">
                        NS
                    </a>
                </div>
                <div className='right'>
                    <Mobiletop/>
                    {/* <Topbar/> */}
                </div>
            </div>
        </div>
    )
}
