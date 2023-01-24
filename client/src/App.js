import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path = "/grading" element = {<ImageUpload/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
