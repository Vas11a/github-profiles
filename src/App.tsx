import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import './App.scss'
import {useAppSelector} from './redux/hook'

function App() {
  const {thema} = useAppSelector((state) => state.thema)
  return (
    <div
      className="container"
      style={
        thema === 'dark'
          ? { color: '#D3D2D5', backgroundColor: '#2D2B2F' }
          : { color: 'black', backgroundColor: 'white' }
      }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
