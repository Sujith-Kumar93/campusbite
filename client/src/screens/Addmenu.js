import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading'; 
import Success from '../components/Success'; 
import { addmenu} from '../actions/menuActions';
 
export default function Addmenu() {
  const[name, setname] = useState('');
  const[smallprice, setsmallprice] = useState();
  const[largeprice, setlargeprice] = useState();
  const[image, setimage] = useState('');
  const[description, setdescription] = useState('');
  const[category, setcategory] = useState('');
  
  const dispatch=useDispatch()
  const Addmenustate= useSelector(state=>state.addMenuReducer)
  const {success, error, loading} = Addmenustate

  
  function formHandler(e){
    e.preventDefault();

    const menu={
      name,
      image,
      description,
      category,
      prices: {
        small : smallprice,
        large : largeprice
      }
    }
    console.log(menu);
    dispatch(addmenu(menu));

  }

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
            <h2>Add Item</h2>
      <div className='text-left'>
        {/* <h2>Add Item</h2> */}
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wronggg'/>)}
        {success && (<Success success='New Menu added successfully'/>)}
        <form onSubmit={formHandler}>
          <input className='form-control' type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="image URL" value={image} onChange={(e)=>{setimage(e.target.value)}}/>
          <button className='btn mt-3' type='submit'>Add Item</button>
        </form>
      </div>
    </div> 
            </div>
        </div>
    </div>
  );
}


