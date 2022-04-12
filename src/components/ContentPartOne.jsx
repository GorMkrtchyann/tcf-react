import React from "react";


function MobileContent () {

    const webclick = () => {
        document.querySelector('.web-section').classList.toggle('pitem-active');
        document.querySelector('.game-section').classList.remove('pitem-active');
        document.querySelector('.temp-section').classList.remove('pitem-active');
    }
    const gameclick = () => {
        document.querySelector('.game-section').classList.toggle('pitem-active');
        document.querySelector('.web-section').classList.remove('pitem-active');
        document.querySelector('.temp-section').classList.remove('pitem-active');
    }
    const tempclick = () => {
        document.querySelector('.temp-section').classList.toggle('pitem-active');
        document.querySelector('.web-section').classList.remove('pitem-active');
        document.querySelector('.game-section').classList.remove('pitem-active');
    }
    return (
        <div className="paragrafs2" id="paragrafs2">
            <div className="paragrafs-items">
                <div className="web-section pitem" id="websec" onClick={webclick} >
                    <div className="back"></div>
                    <div className="title">
                        <h1>Վեբ Դասեր</h1>
                    </div>
                    <div className="web-items itemi">
                        <a href="https://gormkrtchyann.github.io/HTMLLesson/" rel="noreferrer" target="_blank">
                            <div className="item">
                                <p>HTML5</p>
                                <img src="assets/images/logos/htmllogo.png" alt="html" />
                                <div className="dec"></div>
                            </div>
                        </a>
                        <div className="item">
                            <p>CSS</p>
                            <img src="assets/images/logos/css.png" alt="css" />
                            <div className="dec s"></div>
                        </div>
                        <div className="item">
                            <p>JavaScript</p>
                            <img src="assets/images/logos/js.png" alt="javascript js" />
                            <div className="dec j"></div>
                        </div>
                        <div className="item">
                            <p>Bootstrap 5</p>
                            <img src="assets/images/logos/boot.png" alt="bootstrap" />
                            <div className="dec b"></div>
                        </div>
                        <div className="item">
                            <p>SASS</p>
                            <img src="assets/images/logos/sass.png" alt="sass scss" />
                            <div className="dec sc"></div>
                        </div>
                    </div>
                </div>
                <div className="game-section pitem" id="gamesec" onClick={gameclick}>
                    <div className="back"></div>
                    <div className="title">
                        <h1>Խաղեր</h1>
                    </div>
                    <div className="game-items itemi">
                        <a href="games/flexboxdevelopers/index.html" target="_blank">
                            <div className="item">
                                <p>FlexBox Developers</p>
                                <img src="assets/images/logos/game01.png" alt="flexbox flex" />
                                <div className="dec s"></div>
                            </div>
                        </a>
                        <a href="https://gormkrtchyann.github.io/js-game/" target="_black">
                            <div className="item">
                                <p>JavaScript Memory</p>
                                <img src="assets/images/logos/logo-center.png" alt="js java" />
                                <div className="dec j"></div>
                            </div>
                        </a>
                        <a href="games/quiz/Html Quiz/index.html" target="_blank">
                            <div className="item">
                                <p>HTML5 Quiz</p>
                                <img src="assets/images/logos/htmlquiz.png" alt="html quiz" />
                                <div className="dec"></div>
                            </div>
                        </a>
                        <a href="games/quiz/Css Quiz/index.html" target="_blank">
                            <div className="item">
                                <p>CSS Quiz</p>
                                <img src="assets/images/logos/cssquiz.png" alt="css quzi" />
                                <div className="dec s"></div>
                            </div>
                        </a>
                        <a href="games/quiz/Js Quiz/index.html" target="_blank">
                            <div className="item">
                                <p>JavaScript Quiz</p>
                                <img src="assets/images/logos/jsquiz.png" alt="javascript js quiz" />
                                <div className="dec j"></div>
                            </div>
                        </a>
                        <a href="games/quiz/Bootstrap Quiz/index.html" target="_blank">
                            <div className="item">
                                <p>Bootstrap Quiz</p>
                                <img src="assets/images/logos/bootstrapquiz.png" alt="bootstrap quiz" />
                                <div className="dec b"></div>
                            </div>
                        </a>              
                    </div>
                </div>

                <div className="temp-section pitem" id="tempsec" onClick={tempclick}>
                    <div className="back"></div>
                    <div className="title">
                        <h1>Թեմպլեյթներ</h1>
                    </div>
                    <div className="temp-items itemi">
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_blank">
                            <div className="item">
                                <p>Օնլայն Խանութ</p>
                                <img src="assets/images/logos/shopicon.png" alt="shop" />
                                <div className="dec t"></div>
                            </div>
                        </a>
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_blank">
                            <div className="item">
                                <p>Պորֆոլիո</p>
                                <img src="assets/images/logos/portolio.png" alt="portfolio" />
                                <div className="dec t"></div>
                            </div>
                        </a>
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_blank">
                            <div className="item">
                                <p>Դասական</p>
                                <img src="assets/images/logos/temp.png" alt="template" />
                                <div className="dec t"></div>
                            </div>
                        </a>
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_blank">
                            <div className="item">
                                <p>Ավելին</p>
                                <img src="assets/images/logos/seeall.png" alt="free" />
                                <div className="dec t"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

function DesktopContent() {

    const webhover = () => {
        document.querySelector('#web-logo').addEventListener("mouseenter", function(){
            document.querySelector('#web-icon').classList.add('prom-active');
        });
        document.querySelector('#web-icon').addEventListener("mouseleave", function(){
            document.querySelector('#web-icon').classList.remove('prom-active');
        });
        window.addEventListener("scroll", function(){
            document.querySelector('#web-icon').classList.remove('prom-active', this.scrollY > 100);
        });
    }

    const gamehover = () => {
        document.querySelector('#game-logo').addEventListener("mouseenter", function(){
            document.querySelector('#game-icon').classList.add('prom-active');
        });
        document.querySelector('#game-icon').addEventListener("mouseleave", function(){
            document.querySelector('#game-icon').classList.remove('prom-active');
        });
        window.addEventListener("scroll", function(){
            document.querySelector('#game-icon').classList.remove('prom-active', this.scrollY > 100);
        });
    }

    const tamphover = () => {
        document.querySelector('#temp-logo').addEventListener("mouseenter", function(){
            document.querySelector('#temp-icon').classList.add('prom-active');
        });
        document.querySelector('#temp-icon').addEventListener("mouseleave", function(){
            document.querySelector('#temp-icon').classList.remove('prom-active');
        });
        window.addEventListener("scroll", function(){
            document.querySelector('#temp-icon').classList.remove('prom-active', this.scrollY > 100);
        });
    }


    return (
        <div className="paragrafs" id="paragrafs">
            <hr />
            <div className="container">
                <div className="items" onMouseMove={webhover}>
                    <div className="icons" id="web-icon">
                        <a href="https://gormkrtchyann.github.io/HTMLLesson/" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-html5"><p>HTML</p></i>
                        </a>
                        <i className="fa-brands fa-css3-alt"><p>CSS</p></i>
                        <i className="fa-brands fa-bootstrap"><p>BS</p></i>
                        <i className="fa-brands fa-sass"><p>SASS</p></i>
                        <i className="fa-brands fa-js"><p>JS</p></i>
                    </div>
                    <div className="main-item" id="web-logo">
                        <div className="text">
                            <i className="fa-solid fa-code"></i>
                            <p>Վեբ Դասեր</p>
                        </div>
                    </div>
                </div>

                <div className="items" onMouseMove={gamehover}>
                    <div className="game-icons" id="game-icon">
                        <a href="games/flexboxdevelopers/index.html" rel="noreferrer" target="_black">
                            <i className="fa-solid fa-users">
                                <p>FlexBox Dev</p></i>
                        </a>
                        <a href="https://gormkrtchyann.github.io/js-game/" rel="noreferrer" target="_black">
                            <i className="fa-solid fa-brain">
                                <p>JS Memory</p></i>
                        </a>
                        <a href="games/quiz/Html Quiz/index.html" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-html5">
                                <p>HTML Quiz</p>
                            </i>
                        </a>
                        <a href="games/quiz/Css Quiz/index.html" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-css3-alt">
                                <p>CSS Quiz</p>
                            </i>
                        </a>
                        <a href="games/quiz/Bootstrap Quiz/index.html" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-bootstrap">
                                <p>BS Quiz</p>
                            </i>
                        </a>
                        <a href="games/quiz/Js Quiz/index.html" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-js">
                                <p>JS Quiz</p>
                            </i>
                        </a>
                    </div>
                    <div className="main-item" id="game-logo">
                        <div className="text">
                            <i className="fa-solid fa-dice"></i>
                            <p>Խաղեր</p>
                        </div>
                    </div>
                </div>

                <div className="items" onMouseMove={tamphover}>
                    <div className="temp-icons" id="temp-icon">
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-shopify">
                                <p>Խանութ</p></i>
                        </a>
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-bitcoin">
                                <p>Կրիպտո</p>
                            </i>
                        </a>
                        <a href="https://gormkrtchyann.github.io/templates/" rel="noreferrer" target="_black">
                            <i className="fa-brands fa-42-group">
                                <p>Ավելին</p>
                            </i>
                        </a>
                    </div>
                    <div className="main-item" id="temp-logo">
                        <div className="text">
                            <i className="fa-solid fa-file-code"></i>
                            <p>Թեմպլեյթներ</p>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

const ContentPartOne = () => {
    return (
        <section>
            <DesktopContent />
            <MobileContent />
        </section>
    )
}

export default ContentPartOne