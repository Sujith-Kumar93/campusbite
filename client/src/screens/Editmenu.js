import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMenuById } from '../actions/menuActions';
import Error from '../components/Error';
import Loading from '../components/Loading'; 
import Success from '../components/Success'; 
const Editmenu = () => {
  const { menuid } = useParams();
  const dispatch = useDispatch();
  const menu1 = useSelector(state => state.menu); 
  const[name, setname] = useState('');
  const[smallprice, setsmallprice] = useState();
  const[largeprice, setlargeprice] = useState();
  const[image, setimage] = useState('');
  const[description, setdescription] = useState('');
  const[category, setcategory] = useState('');
  const getmenubyidstate = useSelector(state => state.getMenuByIdReducer)
  const {menu , error, loading} = getmenubyidstate;
  useEffect(() => {
    if(menu)
    {
      if(menu._id == menuid)
      {
        setname(menu.name)
      }else{
        dispatch(getMenuById(menuid));
      }  
    }
    else{
      dispatch(getMenuById(menuid));
    }
    // dispatch(getMenuById(menuid));
  }, [menu, dispatch]);
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
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
          <ul className='adminfunctions'>
            {/* <li><a href="/admin/userslist">Users List</a></li> */}
            <li><a href="/admin/menuslist">Menus List</a></li>
            <li><a href="/admin/addmenu">Add New Menu</a></li>
            <li><a href="/admin/orderslist">Orders List</a></li>
          </ul>
          <div>
            <h1>Edit Menu</h1>
            <h1>Menu Id = {menuid}</h1>

            <div className='text-left'>
            {loading && (<Loading/>)}
            {/* {error && (<Error error='Something went wrong'/>)} */}
  
        <form onSubmit={formHandler}>
          <input className='form-control' type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
          <input className='form-control' type="text" placeholder="image URL" value={image} onChange={(e)=>{setimage(e.target.value)}}/>
          <button className='btn mt-3' type='submit'>Edit Menu</button>
        </form>

      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmenu;
