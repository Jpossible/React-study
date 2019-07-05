import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './router';
import C from './components/comment/commentlist';

//globe css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';

const myDiv = React.createElement('div', null, 'testhtml');


ReactDOM.render(<C />, document.getElementById('app'));
