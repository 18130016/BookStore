
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Header from './component/Header';
import Home from './page/Home';
import Products from './page/Products'
import {  Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Login from './page/Login';
import Register from './page/Register';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element = {<Home title="Home page"></Home>}/>
          <Route path='/products' element={<Products></Products>}/>
          <Route path="/login" element={ <Login></Login>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='/product/:id' element={<ProductDetail></ProductDetail>}/>
        </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
