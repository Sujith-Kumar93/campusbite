import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteMenu, getAllMenus } from '../actions/menuActions';

export default function Menuslist() {
  const dispatch = useDispatch();

  const menusstate = useSelector(state => state.getAllMenusReducer);

  const { menus, error, loading } = menusstate;
  useEffect(() => {
    dispatch(getAllMenus())
}, [dispatch])

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
            <div>
      <h2>Items List</h2>
      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'/>)}

      <table className='table table-bordered'> 
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        {menus && menus.map(menu=>{
          return <tr>
            <td>{menu.name}</td>
            <td>
              Small : {menu.prices[0]['small']}<br/>
              {/* Medium : {menu.prices[0]['medium']} */}
              Large : {menu.prices[0]['large']}
            </td>
            <td>{menu.category}</td>
            <td>
              <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteMenu(menu._id))}}></i>
              {/* <Link to={'/admin/editmenu/${menu._id}'}><i className='fa fa-edit m-1'></i> </Link> */}
              <Link to={`/admin/editmenu/${menu._id}`}><i className='fa fa-edit m-1'></i></Link>


            </td>

          </tr>

        })}
        </tbody>
      </table>
    </div>
            
            </div>
        </div>
        
      
    </div>
    
  );
}
