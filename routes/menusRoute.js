const express = require("express")
const router = express.Router();
const Menu = require('../models/menuModel')
const Item=require('../models/orderModel')

router.get("/getallmenus",async(req,res)=>{
    try{
        const menus = await Menu.find({})
        res.send(menus)
    }catch(error){
        return res.status(400).json({message:error})
    }
});

router.post("/Addmenu",async(req,res) => { 

    const item = req.body.item
    console.log(item)
    try {
        const newitem = new Menu({
            name : item.name,
            image : item.image,
            varients : ['small','large'],
            description : item.description,
            category : item.category,
            prices : [item.prices]
        })
        

        await newitem.save()
        res.send('New Item Added Successfully')
    } catch(error) {
        return res.status(400).json({ message: error});
    }


});

router.post("/getmenubyid",async(req,res) => {
    const menuid = req.body.menuid
    try {
        const menu = await Menu.findOne({_id : menuid})
        res.send(menu)

    } catch(error) {
        return res.status(400).json({message : error});

    }

});

router.post("/deletemenu", async(req,res) => {
    const menuid = req.body.menuid;

  try{
    await Menu.findOneAndDelete({_id: menuid})
    res.send('Menu Deleted Successfully')
  } catch(error){
    return res.status(400).json({message : error});
  }
});

module.exports=router;