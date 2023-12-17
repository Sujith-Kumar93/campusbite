import axios from "axios";
export const getAllMenus=()=>async dispatch=>{
    dispatch({type:'GET_MENUS_REQUEST'})
    try{
        const response = await axios.get('/api/menus/getallmenus');
        console.log(response);
        dispatch({type:'GET_MENUS_SUCCESS', payload: response.data});
    }catch(error){
        dispatch({type:'GET_MENUS_FAILED', payload : error});
    }

}; 

export const getMenuById=(menuid)=>async dispatch=>{
    dispatch({type:'GET_MENUBYID_REQUEST'})
    try{
        const response = await axios.post('/api/menus/getmenubyid', {menuid});
        console.log(response);
        dispatch({type:'GET_MENUBYID_SUCCESS', payload: response.data});
    }catch(error){
        dispatch({type:'GET_MENUBYID_FAILED', payload : error});
    }

}; 

export const addmenu=(item )=>async dispatch=>{
    dispatch({type:'ADD_MENU_REQUEST'})
    try{
        const response = await axios.post('/api/menus/Addmenu', {item})
        console.log(response);
        dispatch({type:'ADD_MENU_SUCCESS'})

    }catch(error){
        dispatch({type:'ADD_MENU_FAILED' , payload : error})

    }
}
export const deleteMenu = (menuid) => async (dispatch) => {
    try {
      const response = await axios.post('/api/menus/deletemenu', { menuid });
      alert('Menu Deleted Successfully');
      console.log('Delete Menu Response:', response.data);
      window.location.reload();
    } catch (error) {
      alert('Something went wrong');
      console.error('Delete Menu Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received. Request details:', error.request);
      } else {
        console.error('Error details:', error.message);
      }
      throw error;
    }
  };
  