import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Menuslist from './Menuslist';
import Addmenu from './Addmenu';

export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    console.log(currentUser)
    useEffect(() => {
        if(!currentUser.isAdmin)
        {
            window.location.href='/'
        }

    },[])
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
            <h2 style={{fontSize:'35px'}}>Admin Panel</h2>
            <ul className='adminfunctions'>
                {/* <li><Link to="/admin/userslist">Users List</Link></li> */}
                {/* <li><a href="/admin/userslist" onClick={(e) => handleNavigation(e, '/admin/userslist')}>Users List</a></li> */}
                {/* <li><a href="/admin/userslist">Users List</a></li> */}
                <li><a href="/admin/menuslist">Items List</a></li>
                <li><a href="/admin/addmenu">Add New Item</a></li>
                <li><a href="/admin/orderslist">Orders List</a></li>
            </ul>
            </div>
        </div>
        
      
    </div>
 );
 }

