/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 06/06/2022 - 17:40:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/06/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
   </React.StrictMode>,
);


