import logo from './logo.svg';
import './App.css';
import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route, Link, Switch} from 'react-router-dom';
import Homescreen from './screens/homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import SuccessScreen from './screens/SuccessScreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Userslist from './screens/Userslist';
import Menuslist from './screens/Menuslist';
import Addmenu from './screens/Addmenu';
import Orderslist from './screens/Orderslist';
import Editmenu from './screens/Editmenu';

function App(){
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
       <Route path="/" element = {<Homescreen/>}/>
       <Route path = "/cart" element= {<Cartscreen/>}/>
       <Route path="/register" element = {<Registerscreen/>}/>
       <Route path = "/login" element = {<Loginscreen/>}/>
        {/* <Route path = "/success" element ={SuccessScreen}/> */}
        <Route path = "/orders" element = {<Ordersscreen/>}/>
       
                {/* <Route path="/admin/*" element={<Userslist />} /> */}
                <Route path="/admin/userslist" element={<Userslist/>} />
                <Route path="/admin/orderslist" element={<Orderslist/>} />
                <Route path="/admin/Menuslist" element={<Menuslist/>} />
                <Route path="/admin/Addmenu" element={<Addmenu/>} />
                <Route path="/admin/editmenu/:menuid" element={<Editmenu/>} />
            
        <Route path ="/admin/*" element={<Adminscreen/>}/>
        {/* <Route path="/admin/userslist" element={<Userslist/>} /> */}

       </Routes>
       </BrowserRouter>

    </div>
  );
}
export default App;

