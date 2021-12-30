import React, { useState } from 'react'
import "./Top.scss"
import Topbar from './Topbar'

const Mobiletop = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
        <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
            <div className={open ? 'line1' : 'line2'}></div>
            <div className={open ? 'line1' : 'line2'}></div>
            <div className={open ? 'line1' : 'line2'}></div>
        </div>
        <Topbar open={open}/>
        </>
    )
}

export default Mobiletop









// import "./Top.scss"
// import React, { useState } from 'react'

// export default function Burger() {
//     const [open, setOpen] = useState(false)
//     return (
        
//         <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
//             <div className={open ? 'line1' : 'line2'}></div>
//             <div className={open ? 'line1' : 'line2'}></div>
//             <div className={open ? 'line1' : 'line2'}></div>
//         </div>
            
        
//     )
// }