import { useEffect, useState } from 'react';
import Portfolio from "../Portfolio/Portfolio";
import { featuredPortfolio, allProjects } from '../../data';
import "./Work.scss"

export default function Work() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'featured',
            title: "Featured",
        },
        {
            id: 'all',
            title: "All Projects",
        },
    ];


    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "all":
                setData(allProjects)
                break;
            default:
                setData(featuredPortfolio)
                break;
        }
    },[selected])

    return (
        <div className='work' id='work'>
            <h1>My Projects</h1>
            <ul>
                {list.map((item) => (
                    <Portfolio title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <a href="#intro" target="_blank"><img src={d.img} alt=""/></a>
                    <h3>{d.title}</h3>
                </div>
                ))}   
            </div>

        </div>
    )
}
