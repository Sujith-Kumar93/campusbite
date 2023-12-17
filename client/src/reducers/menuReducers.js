export const getAllMenusReducer = (state={menus:[],loading:false,error:null},action)=>{
    switch(action.type){
        case 'GET_MENUS_REQUEST': return{
            
            ...state,
            loading:true,
            error:null
        }
        case 'GET_MENUS_SUCCESS' : return{
            ...state,
            loading : false,
            menus : action.payload
        }
        case 'GET_MENUS_FAILED':return{
            ...state,
            error:action.payload,
            loading : false
        }
        default:return state;
    }
}
export default getAllMenusReducer;

export const getMenuByIdReducer = (state={menus:[],loading:false,error:null},action)=>{
    switch(action.type){
        case 'GET_MENUBYID_REQUEST': return{
            
            ...state,
            loading:true,
            error:null
        }
        case 'GET_MENUBYID_SUCCESS' : return{
            ...state,
            loading : false,
            menu : action.payload
        }
        case 'GET_MENUBYID_FAILED':return{
            ...state,
            error:action.payload,
            loading : false
        }
        default:return state;
    }
}
// export default getAllMenusReducer;

export const addMenuReducer = (state={loading:false,error:null},action)=>{
    switch(action.type){
        case 'ADD_MENU_REQUEST': return{
            
            ...state,
            loading:true,
            error:null
        }
        case 'ADD_MENU_SUCCESS' : return{
            ...state,
            loading : false,
            success : true,
        }
        case 'ADD_MENU_FAILED':return{
            ...state,
            error:action.payload,
            loading : false
        }
        default:return state;
    }
}

