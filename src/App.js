import logo from './logo.svg';
import './App.css';
import Form from './component/Form';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Routes>

      <Route path='/' element={<Form />} />
    </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
