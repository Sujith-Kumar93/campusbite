const express = require("express");
const db = require('./db')
const Menu = require("./models/menuModel")
const app = express();
const path = require("path");

const menusRoute = require('./routes/menusRoute')

const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/menus/',menusRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
app.use('/api/menus/deletemenu',menusRoute)

// Assuming you have something like this in your backend
app.post('/api/orders/placeorder', async (req, res) => {
    // ... (your existing logic)
  
    const uniquePin = generateUniquePin(); // Generate unique PIN
    const order = {
      // ... (other order details)
      uniquePin: uniquePin,
    };
  
    // Save order to the database, etc.
  
    res.json({ success: true, order: order }); // Send uniquePin in the response
  });

  if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }


app.get("/",(req,res) =>
{
    res.send("Server Working"+ port);
 
});


const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port');
