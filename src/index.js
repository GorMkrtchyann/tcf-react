import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import ContentPartOne from './components/ContentPartOne';
import ContentPartTwo from './components/ConstentPartTwo';


const app = (
    <div>
        <Header />
        <About />
        <ContentPartOne />
        <ContentPartTwo />
    </div>
)


ReactDOM.render(app, document.querySelector('body'));