
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import store from './redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   </>
// );


// // index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Assuming you have your Redux store configured properly
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
