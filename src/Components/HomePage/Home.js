import './Home.scss';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("isLogin") === "false") {
            navigate('/')
        }
    })

    const handleClick = () => {
        localStorage.setItem("isLogin", "false");
        navigate('/')
    }

    return (
        <div className='Home'>
            <div className="left-menu" >
                <h1 className='left-menu__title'>GOODMOODS</h1>
                <div className='left-menu__doubleLine' >
                    <div className='left-menu__line'></div>
                    <div className='left-menu__line'></div>
                </div>
                <div className="left-menu__social">
                    <p>FB</p>
                    <p>TW</p>
                    <p>IG</p>
                </div>
            </div>
            <div className="main-menu">
                <img src={require("./img/img.png")} alt="guest room"/>
                <div className="main-menu__top">
                    <h2 className="main-menu__top-title">CASE STUDY</h2>
                    <div className="main-menu__top-whiteLine"></div>
                </div>
                <div className="main-menu__middle">
                    <div className="main-menu__middle-title">
                        <p className="item">Classic</p>
                        <p className="item">& Modern</p>
                    </div>
                    <div className="main-menu__middle-navigate">
                        <p className="item">Next</p>
                        <p className="item"><Link className='navigate' to="/">Prev</Link></p>
                        <p className="item" onClick={handleClick} style={{cursor: "pointer"}}>Logout</p>
                    </div>
                </div>
                <div className="main-menu__bottom">
                    <p className="main-menu__bottom-current">01 / <span>04</span></p>
                </div>
            </div>
            <div className="right-menu">
                <p className="right-menu__details">Project Details</p>
                <div className="right-menu__location">
                    <p>Las Vegas</p>
                    <p>2022</p>
                    <p>Exterior & Interior</p>
                    <div className="right-menu__line"></div>
                </div>
                <p className="right-menu__info">See case study</p>
                <div className="right-menu__image">
                    <img src={require("./img/img1.png")} alt="" />
                    <img src={require("./img/img2.png")} alt="" />
                    <img src={require("./img/img3.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;