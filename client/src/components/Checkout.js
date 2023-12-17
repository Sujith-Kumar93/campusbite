import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Checkout({ subtotal }) {
    const orderstate = useSelector((state) => state.placeorderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    
    function tokenHandler(token) {
        {
            console.log(token)
            dispatch(placeOrder(token, subtotal))

        }
    }
    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error="something went wrong" />)}
            {success && (<Success success="your order placed Successfully" />)}
            <StripeCheckout
                amount={subtotal * 100}
                token={tokenHandler}
                stripeKey='pk_test_51OIDppSIhyMDCKISvsT9vwKSZTQFxS3YIaq30esgxwehVbUdSpcK5UdNjfS8ZU0cp9kGZynaTrcYUOwQyGD3NynB00A2fmipbi'
                currency='INR'


            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}
