/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/07/2022 - 11:25:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/07/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'

import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <main className="App">
      <Outlet />
   </main>
  ) 
}

export default Dashboard
