// import React from 'react';
// import Loading from '../components/Loading';
// import Error from '../components/Error';
// import { useSelector , useDispatch} from 'react-redux';
// import { useEffect } from 'react';
// import {getUserOrders} from '../actions/orderActions';

// export default function Orderslist() {
//   const dispatch = useDispatch();

//   const ordersstate = useSelector((state) => state.getUserOrdersReducer);

//   const { orders = [], error= null, loading } = ordersstate;
//   useEffect(() => {
//     dispatch(getUserOrders())
// }, [dispatch])

//   return (
//     <div>
//       <div className='row justify-content-center'>
//         <div className='col-md-10'>
//           <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
//           <ul className='adminfunctions'>
//             <li><a href="/admin/menuslist">Menus List</a></li>
//             <li><a href="/admin/addmenu">Add New Menu</a></li>
//             <li><a href="/admin/orderslist">Orders List</a></li>
//           </ul>
//           <div>
//             <h1>Orders List</h1>
//             {loading && (<Loading/>)}
//             {error && (<Error error='Something went wrong'/>)}

//             <table className='table table-striped table-bordered'>
//               <thead className='thead-dark'>
//                 <tr>
//                   <th>Order Id</th>
//                   <th>Amount</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order._id}>
//                     <td>{order._id}</td>
//                     <td>{order.orderAmount}</td>
//                     <td>{order.createdAt.substring(0, 10)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// Testing code
import React from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserOrders } from '../actions/orderActions';

export default function Orderslist() {
  const dispatch = useDispatch();

  const ordersstate = useSelector((state) => state.getUserOrdersReducer);

  const { orders = [], error, loading } = ordersstate;
  const [orderPins, setOrderPins] = React.useState({});

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      const pins = {};
      orders.forEach((order) => {
        pins[order._id] = order.uniquePin; // Assuming uniquePin is available in the order data
      });
      setOrderPins(pins);
    }
  }, [orders]);

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
          <ul className='adminfunctions'>
            <li><a href="/admin/menuslist">Items List</a></li>
            <li><a href="/admin/addmenu">Add New Item</a></li>
            <li><a href="/admin/orderslist">Orders List</a></li>
          </ul>
          <div>
            <h1>Orders List</h1>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}

            <table className='table table-striped table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th>Order Id</th>
                  {/* <th>Roll Number</th> */}
                  <th>User Id</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Unique PIN</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.email}</td>
                    <td>{order.userid}</td>
                    <td>{order.orderAmount}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{orderPins[order._id]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}