const express = require("express");
const { v4: uuidv4 } = require('uuid'); 
const router = express.Router();
const stripe = require("stripe")("sk_test_51OIDppSIhyMDCKISVGEeA6zsK9ubWavFjGC8Q53yCdFtXyxtW1hfAI8YNSI2Jbym6Z2X0I9n1Fclun1mVgeFxHdL00kIarqVtF")
const Order = require('../models/orderModel')

router.post("/placeorder", async (req, res) => {
    const { token, subtotal, currentUser, cartItems } = req.body
    try {
        // const customer = await stripe.customers.create({
        //     email: token.email,
        //     source: token.id
        // })
        // const payment = await stripe.charges.create({
        //     amount: subtotal * 100,
        //     currency: 'INR',
        //     customer: customer.id,
        //     receipt_email: token.email
        // }, {
        //     idempotencyKey: uuidv4()
        // })

        // if (payment) {
        const neworder = await new Order({
            name: currentUser.name,
            email: currentUser.email,
            userid: currentUser._id,
            orderItems: cartItems,
            orderAmount: subtotal,
            transactionId: uuidv4()  // Use uuidv4 to generate a unique transaction ID
        })
        await neworder.save()
        res.send("Order placed successfully")
        // }
        // else {
        //     res.send("payment failed")
        // }
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error })
    }
});

router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body
    try {
        const orders = await Order.find({ userid: userid }).sort({_id:-1})
        res.send(orders);
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
});

module.exports = router;
