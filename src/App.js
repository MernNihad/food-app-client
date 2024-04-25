import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './user/Layout/Layout';
import './App.css';
import './index.css';
import AboutUs from './user/AboutUs/AboutUs'
import Contact from './user/Contact/Contact';
import Register from './user/Register/Register';
import Login from './user/Login/Login';
import Banner from './user/Banner/Banner';
import Menu from './user/Menu';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import Hotel from './Admin/Hotel/Hotel';
import Adminreg from './Admin/Adminreg/Adminreg';
import AdminLogin from './Admin/Adminreg/Adminlogin';
import AdminProfile from './Admin/AdminProfile/AdminProfile';
import UsersAdmin from './Admin/UsersAdmin/UsersAdmin';
import ProductAdd from './Admin/AdminProduct/ProductAdd';
import ViewHotel from './Admin/Hotel/ViewHotel';
import Footer from './user/Footer/Footer';
import ViewProduct from './Admin/AdminProduct/viewproduct';
import Menulist from './user/Menulist/Menulist';
import AddtoCart from './user/Menulist/AddtoCart';
import OrderMenu from './user/Menulist/OrderMenu';
import Payment from './user/Menulist/Payment';
import EditHotel from './Admin/Hotel/EditHotel';
import EditProduct from "./Admin/AdminProduct/EditProduct"
import OrderAddress from "./user/OrderAddress"
import Orders from "./user/Orders"
import AdminOrders from "./Admin/AdminOrders"
import AdminOrderAll from "./Admin/AdminOrderAll"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* user area */}
          <Route path='/' element={<Layout/>} > 
          {/*  */}
          <Route path='/' element={<Banner/>} />
          <Route path='menu' element={<Menu/>} />
          <Route path='menulist' element={<Menulist/>} />
          <Route path='cart' element={<AddtoCart/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='ordermenu' element={<OrderMenu/>} />
          <Route path='payment' element={<Payment/>} />
          <Route path='aboutus' element={<AboutUs/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='footer' element={<Footer/>} />
          <Route path='order-address' element={<OrderAddress/>}/>
          {/*  */}
          </Route> 
          {/* user area */}


          {/* user login and signup */}
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
          {/* user login and signup */}

          {/* Admin login and signup */}
          <Route path='/adminregister' element={<Adminreg/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
          {/* Admin login and signup */}


          {/* admin area */}
          <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminProfile/>}/>
          <Route path='hotel' element={<Hotel/>}/>
          <Route path='viewhotel' element={<ViewHotel/>}/>
          <Route path='user' element={<UsersAdmin/>}/>
          <Route path='product' element={<ProductAdd/>}/>
          <Route path='order' element={<AdminOrders/>}/>
          <Route path='viewproduct' element={<ViewProduct/>}/>
          <Route path='edit-hotel/:id' element={<EditHotel/>}/>
          <Route path='edit-product/:id' element={<EditProduct/>}/>
          <Route path='order/:id' element={<AdminOrderAll/>}/>
          
          
          
          
          </Route>
          {/* admin area */}

           
          
          
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
