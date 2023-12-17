import React from 'react';

export default function Userslist() {
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
            <h2 style={{fontSize:'35px'}}>Admin Panel</h2>
            <ul className='adminfunctions'>
                {/* <li><Link to="/admin/userslist">Users List</Link></li> */}
                {/* <li><a href="/admin/userslist" onClick={(e) => handleNavigation(e, '/admin/userslist')}>Users List</a></li> */}
                {/* <li><a href="/admin/userslist">Users List</a></li> */}
                <li><a href="/admin/Menuslist">Menus List</a></li>
                <li><a href="/admin/Addmenu">Add New Menu</a></li>
                <li><a href="/admin/orderslist">Orders List</a></li>
            </ul>
            <div>
      <h1>Users List</h1>
    </div>
            
            </div>
        </div>
        
      
    </div>
    
  );
}
