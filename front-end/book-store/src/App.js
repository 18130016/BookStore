import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./admin/scss/App.scss";

import Header from './component/Header';
import Home from './page/Home';
import ProductsCategory from './page/ProductsCategory'
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Login from './page/Login';
import Register from './page/Register';
import ProductDetail from './page/ProductDetail';
import AdminPage from './page/Admin';
import Cart from './page/Cart';
import MyAccount from './page/my-account';
import ListFarvorite from './page/ListFarvorite';
import Checkout from './page/Checkout';
import MainLayout from './admin/layout/MainLayout';
import SalesAnalysis from './admin/components/sales-analysis/SalesAnalysis';
import Accounts from './admin/components/accounts/Accounts';
import Dashboard from './admin/pages/Dashboard';
import Blank from './admin/pages/Blank';
import AddressList from './page/address/address-list/AddressList';
import Blog from './page/blog/Blog';
import ProductsAdmin from './admin/components/products/ProductsAdmin';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home title="Home page"></Home>} />
        <Route path='/products' element={<ProductsAdmin></ProductsAdmin>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>} />
        <Route path="/cart" element={<Cart />}>
        </Route>
        <Route path="/cart/address-list" element={<AddressList />} />

        <Route path="/account" element={<MyAccount />} />
        <Route path="/categories" element={<ProductsCategory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/farvorite" element={<ListFarvorite />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/orders" element={<Blank />} />
          <Route path="/admin/products" element={<ProductsAdmin />} />
          <Route path="/admin/customers" element={<Blank />} />
          <Route path="/admin/sales-analysis" element={<SalesAnalysis />} />
          <Route path="/admin/accounts" element={<Accounts />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
