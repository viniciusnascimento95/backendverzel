import { Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import './styles/app.scss';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  return (

      <Routes>
        {!accessToken ?
          <Route path="*" element={<Login setAccessToken={setAccessToken} />}/>
          :
          <Route path="*" element={<Home setAccessToken={setAccessToken} />}/>
        }
      </Routes>

  );
}

export default App;
