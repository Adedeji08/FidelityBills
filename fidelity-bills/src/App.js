/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 06/06/2022 - 17:41:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/06/2022
    * - Author          : 
    * - Modification    : 
**/

import './App.css';
import { Routes, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  
  return (
    <Routes>
       <Route path="/" element={<Dashboard />}>
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
     </Route>
    </Routes>
  );
}

export default App;


