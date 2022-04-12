import React from "react";

const Header = () => {
    return(
        <section id="header">
            <div className="back-video">
                <div className="back-gradient"></div>
                <video src="assets/video/bkvideo.mp4" loop autoPlay muted></video>
            </div>

            <div className="home-text" >
                <h1>The CodeFather</h1>
                <hr />
                <p>Բարև և բարի գալուստ The CodeFather կայք որտեղ կարող եք սովորել և զարգացնել ձեր ծրագարվորման գիտելիքները:</p>
                <a href="#about">
                    <i className="fa-solid fa-angles-down fa-fade"></i>
                </a>
            </div>      
        </section>
    )
    
}

export default Header