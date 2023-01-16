import React from 'react'
import {Route, Routes} from "react-router-dom";
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <Routes>
      <Route path = "/grading" element = {<ImageUpload/>} />
    </Routes>
  );
}

export default App;
