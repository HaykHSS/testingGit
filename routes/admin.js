const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require("../util/path")

router.use('/add-product',(req,res,next)=>{
    console.log('in another middlware!');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;