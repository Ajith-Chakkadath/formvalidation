import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Display from './component/Display';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Routes>

      <Route path='/' element={<Form />} />
      <Route path='/display/:fun' element={<Display />} />
      
    </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
