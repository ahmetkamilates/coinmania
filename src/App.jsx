import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import DetailControler from './controllers/DetailController'
import axios from 'axios';
import HeaderView from './views/HeaderView';
import HomeController from './controllers/HomeController';

axios.defaults.baseURL = 'https://api.coincap.io/v2';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <HeaderView/>
   <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<HomeController />} />
      <Route path="/coin/:id" element={<DetailControler />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
