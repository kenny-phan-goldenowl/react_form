import './Home.scss'

function Home() {
    return (
        <div className='Home'>
            <div className="leftMenu" >
                <h1 className='leftMenu__title'>GOODMOODS</h1>
                <div className='leftMenu__doubleLine' >
                    <div className='leftMenu__line'></div>
                    <div className='leftMenu__line'></div>
                </div>
                <div className="leftMenu__social">
                    <p>FB</p>
                    <p>TW</p>
                    <p>IG</p>
                </div>
            </div>
            <div className="mainMenu">
                <img src={require("./img/img.png")} alt="guest room"/>
                <div className="mainMenu__top">
                    <h2 className="mainMenu__top-title">CASE STUDY</h2>
                    <div className="mainMenu__top-whiteLine"></div>
                </div>
                <div className="mainMenu__middle">
                    <div className="mainMenu__middle-title">
                        <p className="item">Classic</p>
                        <p className="item">& Modern</p>
                    </div>
                    <div className="mainMenu__middle-navigate">
                        <p className="item">Next</p>
                        <p className="item">Prev</p>
                    </div>
                </div>
                <div className="mainMenu__bottom">
                    <p className="mainMenu__bottom-current">01 / <span>04</span></p>
                </div>
            </div>
            <div className="rightMenu">
                <p className="rightMenu__details">Project Details</p>
                <div className="rightMenu__location">
                    <p>Las Vegas</p>
                    <p>2022</p>
                    <p>Exterior & Interior</p>
                    <div className="rightMenu__line"></div>
                </div>
                <p className="rightMenu__info">See case study</p>
                <div className="rightMenu__image">
                    <img src={require("./img/img1.png")} alt="" />
                    <img src={require("./img/img2.png")} alt="" />
                    <img src={require("./img/img3.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;