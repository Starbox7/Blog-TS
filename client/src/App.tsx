import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Mypage from './pages/mypage/Mypage';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/:id" element={<Mypage/>}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/write/:id" element={<Write/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/single/:id" element={<Single/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
