import React from "react";

const ContentPartTwo = () => {
    const disFlex = {
        display: 'flex',
        marginTop: '-100px'
    }
    return (
        <div className="content-line2" style={disFlex}>
            <div className="codeeditor">
                <div className="codeeditor-main">
                    <div className="codeeditor-logo">
                        <div className="main">
                            <i className="fa-solid fa-code-branch"></i>
                            <h4>CodeEditor</h4>
                        </div>
                        <div className="codeeditor-text">
                            <p>Կոդերի խմբագրման գործիք։ Այն կարող եք բացել և գրել ձեր HTML, CSS և JavaScript կոդերը։</p>
                            <a href="https://gormkrtchyann.github.io/frontend-codeeditor/" rel="noreferrer" target="_blank">
                                <button>Բացել</button>
                            </a>
                        </div>
                    </div>          
                </div>
            </div>
        
            <div className="framwork">
                <div className="framwork-main">
                    <div className="framwork-logo">
                        <div className="main">
                            <img src="assets/images/logos/casterwhitelogo.png" alt="" />
                            <h4>Caster</h4>
                        </div>
                        <div className="framwork-text">
                            <p>CSS և JS ֆրեմվորկ է, որը կրճատում է ձեր CSS և JS կոդը։</p>
                            <a href="https://gormkrtchyann.github.io/caster/" rel="noreferrer"  target="_blank">
                                <button>Բացել</button>
                            </a>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default ContentPartTwo 