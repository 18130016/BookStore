
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Header from './component/header/Header';
import Home from './component/home/Home';
import Products from './component/product/Products'
import {  Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Login from './component/login/Login';
import Register from './component/register/Register';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element = {<Home title="Home page"></Home>}/>
          <Route path='/products' element={<Products></Products>}/>
          <Route path="/login" element={ <Login></Login>} />
          <Route path='/register' element={<Register></Register>} />
        </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
