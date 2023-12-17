
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserOrders } from '../actions/orderActions';
// import Loading from '../components/Loading';
// import Error from '../components/Error';

// const generateUniquePin = () => {
//   return Math.floor(1000 + Math.random() * 9000);
// };

// export default function Ordersscreen(props) {
//   const dispatch = useDispatch();
//   const orderstate = useSelector((state) => state.getUserOrdersReducer);
//   const { orders, error, loading } = orderstate;

//   useEffect(() => {
//     dispatch(getUserOrders());
//   }, []);

//   return (
//     <div>
//       <h2 style={{ fontSize: '35px' }}>My Orders </h2>
//       <hr />
//       <div className="row justify-content-center">
//         {loading && <Loading />}
//         {error && <Error error="Something went wrong" />}
//         {orders &&
//           orders.map((order) => {
//             const uniquePin = generateUniquePin();

//             return (
//               <div
//                 className="col-md-8 m-2 p-1"
//                 style={{ backgroundColor: '#ffbf00', color: 'black' }}
//                 key={order._id}
//               >
//                 <div className="flex-container">
//                   <div className="text-left w-100 m-1">
//                     <h2 style={{ fontSize: '25px' }}>Items</h2>
//                     <hr />
//                     {order.orderItems.map((item) => (
//                       <div key={item._id}>
//                         <p>
//                           {item.name} [{item.varient}] * {item.quantity} ={' '}
//                           {item.price}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="text-left w-100 m-1">
//                     <h2 style={{ fontSize: '25px' }}>Order Info</h2>
//                     <hr />
//                     <p>Order Amount : {order.orderAmount}</p>
//                     <p>Date : {order.createdAt.substring(0, 10)}</p>
//                     <p>Transaction Id : {order.transactionId}</p>
//                     <p>Order Id : {order._id}</p>
//                     <p>Unique PIN: {uniquePin}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }


// Testing code

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

const generateUniquePin = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export default function Ordersscreen(props) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  const [orderPins, setOrderPins] = useState({});

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      const pins = {};
      orders.forEach((order) => {
        const uniquePin = generateUniquePin();
        pins[order._id] = uniquePin;
      });
      setOrderPins(pins);
    }
  }, [orders]);

  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders </h2>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            const uniquePin = orderPins[order._id];

            return (
              <div
                className="col-md-8 m-2 p-1"
                style={{ backgroundColor: '#ffbf00', color: 'black' }}
                key={order._id}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: '25px' }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => (
                      <div key={item._id}>
                        <p>
                          {item.name} [{item.varient}] * {item.quantity} ={' '}
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                    <hr />
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id : {order.transactionId}</p>
                    <p>Order Id : {order._id}</p>
                    <p>Unique PIN: {uniquePin}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}