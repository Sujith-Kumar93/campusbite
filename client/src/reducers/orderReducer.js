export const placeorderReducer = (state={loading: false,
    success: false,
    error: null},action)=>{
    switch(action.type){
        case 'PLACE_ORDER_REQUEST' : return{
            loading:true,
            success:false
        }
        case 'PLACE_ORDER_SUCCESS':return{
            loading:false,
            success:true,
            
        }
        case 'PLACE_ORDER_FAILED' : return{
            loading:false,
            success:false,
            error:action.payload
        }
        default : return state
    }
}

export const loginUserReducer = (state={},action)=>{
    switch(action.type)
    {
        case 'USERLOGIN-REQUEST': return{
            loading:true
        }
        case 'USER_LOGIN_SUCCESS': return{
            loading:false,
            success:true,
            curentUser : action.payload
        }
        case 'USER_LOGIN_FAILED' : return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}
export const getUserOrdersReducer = (state={orders:[]},action)=>{
    const generateUniquePin = () => {
        return Math.floor(1000 + Math.random() * 9000);
      };
    switch(action.type){
        case 'GET_USER_ORDERS_REQUEST': return{
            
            ...state,
            loading:true,
            error:null
        }
        case 'GET_USER_ORDERS_SUCCESS':
  const ordersWithPins = action.payload.map(order => ({
    ...order,
    uniquePin: generateUniquePin(), // Ensure you have a function to generate uniquePin
  }));
  return {
    ...state,
    loading: false,
    orders: ordersWithPins,
  };
        case 'GET_USER_ORDERS_FAILED':
            return{
            ...state,
            error:action.payload,
            loading : false
        }
        default:return state;
    }
}
export default getUserOrdersReducer;


export const getAllOrdersReducer = (state = { orders: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case 'GET_ORDERS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'GET_ORDERS_SUCCESS':
        return {
          ...state,
          loading: false,
          orders: action.payload
        };
      case 'GET_ORDERS_FAILED':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
