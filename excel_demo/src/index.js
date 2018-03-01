import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SheetJSApp from './SheetJSApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SheetJSApp />, document.getElementById('root'));
registerServiceWorker();
