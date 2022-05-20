const express = require('express');
const ProductController = require('../controller/ProductController')
const router = express.Router();

router.get('/:id',ProductController.findById);
router.post('/',ProductController.createOne);
router.get('/',ProductController.findAll);
// router.get('/',(req,res)=>{
//     res.send('asdagsd')
// })

module.exports = router
