import React from "react";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-part-1">
                <div className="block-2 block">
                    <img src="assets/images/vectors/seo.png" alt="vector" />
                    <div className="block-text">
                        <h2><b>Զ</b>արգացնող <b>Խ</b>աղեր</h2>
                        <hr />
                        <p>Զարգացրեք ծրագրավորման գիտելիքները խաղեր խաղալով։</p>
                    </div>
                </div>
        
                <div className="block-1 block">
                    <img src="assets/images/vectors/web-developer.png" alt="vector" />
                    <div className="block-text">
                        <h2><b>Վ</b>եբ <b>Ծ</b>րագարվորում</h2>
                        <hr />
                        <p>Սովորեք վեբ ծրագրավորում մեզ հետ։</p>
                    </div>
                </div>
        
                <div className="block-3 block">
                    <img src="assets/images/vectors/website-recovery.png" alt="vector" />
                    <div className="block-text">
                        <h2><b>Պ</b>ատրաստի <b>Կ</b>այքերի <b>Թ</b>եմպլեյտներ</h2>
                        <hr />
                        <p>Կարող եք այստեղից ներբեռնել պատրաստի կայքեր և ձևափոխելով այն ստանալ ձեր ուզածը։</p>
                    </div>
                </div>
            </div>

            <div id="mob-about" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="block-1 block">
                        <img src="assets/images/vectors/web-developer.png" alt="" />
                        <div className="block-text">
                            <h2><b>Վ</b>եբ <b>Ծ</b>րագարվորում</h2>
                            <hr />
                            <p>Սովորեք վեբ ծրագրավորում մեզ հետ։</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="block-2 block">
                        <img src="assets/images/vectors/seo.png" alt="" />
                        <div className="block-text">
                            <h2><b>Զ</b>արգացնող <b>Խ</b>աղեր</h2>
                            <hr />
                            <p>Զարգացրեք ծրագրավորման գիտելիքները խաղեր խաղալով։</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="block-3 block">
                        <img src="assets/images/vectors/website-recovery.png" alt="" />
                        <div className="block-text">
                            <h2><b>Պ</b>ատրաստի <b>Կ</b>այքերի <b>Թ</b>եմպլեյտներ</h2>
                            <hr />
                            <p>Կարող ես այստեղից ներբեռնել պատրաստի կայքեր և ձևափոխելով այն ստանալ ձեր ուզածը։</p>
                        </div>
                    </div>
                </div>
                </div>
            
                <button className="carousel-control-prev" typeof="button" data-bs-target="#mob-about" data-bs-slide="prev">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="carousel-control-next" typeof="button" data-bs-target="#mob-about" data-bs-slide="next">
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </section>
    )
}

export default About