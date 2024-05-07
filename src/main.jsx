import React from 'react'                         //import libraries default loaded screen 
import ReactDOM from 'react-dom';
import App from './App.jsx'                       //import user app to infer


ReactDOM.createRoot(document.getElementById('root')).render(  //root function? 
  <React.StrictMode>
    <App />                               
  </React.StrictMode>,
)
