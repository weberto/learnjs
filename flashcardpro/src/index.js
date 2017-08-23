import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import StackList from './components/Stacklist';
// import App from './components/App';
// import Menu from './components/menu';
import NavDropdownEshape from './components/NavDropdown';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NavDropdownEshape />, document.getElementById('nav'));
ReactDOM.render(<StackList />, document.getElementById('root'));
// ReactDOM.render(<Menu />, document.getElementById('menu'));
// registerServiceWorker();
