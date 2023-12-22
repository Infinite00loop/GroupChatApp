const express= require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send(
        '<form action="/" method="POST" ><input type="text" name="Chat" ><button type="submit">Send</button></form>')

});
    
router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;