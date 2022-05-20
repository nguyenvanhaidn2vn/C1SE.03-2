// const Account = require('../Collection/Account')
// const jwt = require('jsonwebtoken')
// const Product = require('../Collection/Product');
// const multer = require('multer')
// const fs = require('fs');
// const path = require('path');
// const { response } = require('express');
const express = require('express');
const router = express.Router();
const UserRouter = require('./user');
const ProductRouter = require('./products')
const fs=require('fs')
const route =(app)=>{
  app.use('/api/user',UserRouter);
  app.use('/api/Product',ProductRouter)
}

module.exports = route

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/image/product')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
//   }
// })
// var upload = multer({ storage: storage })
// const route = (app) => {

//   // Signin
//   // app.post('/signin', async (request, response) => {
//   //   const { phone, passWord } = request.body;
//   //   try {
//   //     const findAccount = await Account.findOne({ phone });
//   //     console.log(findAccount)
//   //     if (findAccount) {
//   //       if (passWord === findAccount.passWord) {
//   //         const token = await jwt.sign({ _id: findAccount._id }, 'abcbca123')
//   //         return response.json({
//   //           success: true,
//   //           messages: 'Đăng nhập thành công',
//   //           token,
//   //           user: {
//   //             Name: findAccount.Name,
//   //             phone: findAccount.phone,
//   //           }
//   //         })
//   //       }
//   //       else
//   //         return response.json({
//   //           success: false,
//   //           messages: 'Sai mật khẩu',
//   //         })
//   //     }
//   //     else
//   //       return response.json({
//   //         success: false,
//   //         messages: 'Tài khoản không tồn tại'
//   //       })
//   //   } catch (error) {
//   //     return response.json({
//   //       success: false,
//   //       messages: 'Lỗi Server'
//   //     })
//   //   }


//   // })
//   // app.post('/Register', async (request, response) => {
//   //   const { name, phone, passWord } = request.body;
//   //   try {
//   //     const findAccount = await Account.findOne({ phone });
//   //     if (findAccount)
//   //       return response.json({
//   //         success: false,
//   //         messages: 'Tài khoản tồn tại rồi'
//   //       })
//   //     else {
//   //       const account = new Account({
//   //         name,
//   //         phone,
//   //         passWord,
//   //       })
//   //       const newAccount = await account.save()
//   //       return response.json({
//   //         success: true,
//   //         account: newAccount,
//   //         messages:"tạo tài khoản thành công"
//   //       })
//   //     }

//   //   } catch (error) {
//   //     console.log(error.toString())
//   //     return response.json({
//   //       success: false,
//   //       messages: 'Lỗi Server'
//   //     })
//   //   }



//     // const token = await jwt.sign({ _id: 123, name: 'NguyenVanHai' }, 'abcbca123');
//     // return res.json({
//     //   success: true,
//     //   token
//     // })
//   // })
//   // Post
//   app.post('/allPost', async (request, response) => {
//     try {
//       const getToken = request.headers.authorization.split(' ')[1];
//       const verifyToken = await jwt.verify(getToken, 'abcbca123');
//       console.log(verifyToken)
//     } catch (error) {
//       return response.json({
//         success: false,
//         messages: 'Token khong ton tai'
//       })
//     }
//   })

//   // Product
//   app.post('/create-product', upload.single('image'), async (request, response) => {
//     console.log(request.file);
//     const { name, price, info } = request.body;
//     if (!name)
//       return response.json({
//         success: false,
//         messages: 'tên sản phẩm không được để trống'
//       })
//     else if(!price)
//       return response.json({
//         success:false,
//         messages:'Giá không được để trống'
//       })
//     try {
//       const newProduct = new Product({
//         name,
//         info,
//         price,
//         image: '/images/' + request.file.filename,
//         messages:'Update thành công'
//       })
//       const saveProduct = await newProduct.save();
//       return response.json({
//         success: true,
//         product: saveProduct,
//       })
      
//     } catch (err) {
//       return response.json({
//         success: false,
//         messages:'Thêm món không thành công'
//       })
//     }
//   })
//   app.get('/list-product', async (request, response) => {
//     try {
//       const products = await Product.find({})
//       const newProducts = products.map(value => {
//         return {
//           _id: value._id,
//           name: value.name,
//           info: value.info,
//           price: value.price,
//           image: process.env.API_URL + value.image
//         }
//       })
//       return response.json({
//         success: true,
//         products: newProducts
//       })
//     } catch (err) {
//       return response.json({
//         success: false,
//         messages: 'Lỗi Server'
//       })
//     }
//   })
//   app.delete('/delete-product/:id', async (request, response) => {
//     try {
//       const deletedProduct = await Product.findByIdAndDelete(request.params.id, { new: true })
//       if (deletedProduct) {
//         if (fs.existsSync(path.join(__dirname, '../public/image/product/') + deletedProduct.image.split('/')[2]))
//           fs.rmSync(path.join(__dirname, '../public/image/product/') + deletedProduct.image.split('/')[2])
//         return response.json({
//           success: true,
//           deletedProduct,
//           messages:'Xóa thành công'
//         })
//       }
//       else
//         return response.json({
//           success: false,
//           messages: 'Product không tồn tại hoặc đã xóa'
//         })
//     } catch (error) {
//       // console.log(error.toString())
//       return response.json({
//         success: false,
//         messages: 'Lỗi Server'
//       })
//     }
//   })
//   app.put('/update-product/:id', async (request, response) => {
//     try {
//       const {
//         name,
//         info,
//         price
//       } = request.body
//       if (!name)
//         return response.json({
//           success: false,
//           messages: 'name không được trống'
//         })
//       else if (!info)
//         return response.json({
//           success: false,
//           messages: 'info không được để trống'
//         })
//       else if (!price)
//         return response.json({
//           success: false,
//           messages: 'price khong duoc de trong'
//         })
//       else {
//         const updatedProduct = await Product.findByIdAndUpdate(request.params.id, {
//           info,
//           name,
//           price
//         }, { new: true })
//         if (updatedProduct) {
//           return response.json({
//             success: true,
//             updatedProduct: {
//               _id: updatedProduct._id,
//               name: updatedProduct.name,
//               price: updatedProduct.price,
//               info: updatedProduct.info,
//               image: process.env.API_URL + updatedProduct.image
//             }
//           })  

//         } else
//           return response.json({
//             success: false,
//             messages: 'id is not exists'
//           })
//       }
//     } catch (error) {
//       console.log(error.toString())
//       return response.json({
//         success: false,
//         messages: 'Error server'
//       })
//     }
//   })


//   // Staff
//   app.put('/update-accounts/:id', async(request, response) => {
//     try {
//       const {
//         firstName,
//         phone,
//         gmail,
//         role
//       } = request.body
//       if (!firstName)
//         return response.json({
//           success: false,
//           messages: 'firstName khong duoc de trong'
//         })
      
//       else if (!phone)
//         return response.json({
//           success: false,
//           messages: 'Phone khong duoc de trong'
//         })
//       else if (!gmail)
//         return response.json({
//           success: false,
//           messages: 'gmail khong duoc de trong'
//         })
//       else if (!role)
//         return response.json({
//           succes: false,
//           messages: 'role khong duoc de trong'
//         })
//       else {
//         const updatedAccounts = await Account.findByIdAndUpdate(request.params.id, {
//           firstName,
//           phone,
//           gmail,
//           role
//         }, { new: true })
//         if (updatedAccounts) {
//           return response.json({
//             success: true,
//             updatedAccounts: {
//               _id: updatedAccounts._id,
//               firstName:updatedAccounts.firstName,
//               phone:updatedAccounts.phone,
//               gmail:updatedAccounts.gmail,
//               role:updatedAccounts.role,
//             }
            
//           })
//         } else{
//             return response.json({
//               success:false,
//               messages:'Loi Server'
//             })
//         }

//       }
//     } catch (error) {
//         return response.json({
//           success:false,
//           messages:'Loi Server'
//         })
//     }
//   })
  
//   app.get('/list-accounts', async (request, response) => {
//     try {
//       const accounts = await Account.find({})
//       const newAccounts = accounts.map(value => {
//         return {
//           _id: value._id,
//           phone: value.phone,
//           passWord: value.passWord,
//           firstName: value.firstName,
//           lastName: value.LastName,
//           phone: value.phone,
//           gmail: value.gmail,
//           role: value.role
//         }
//       })
//       return response.json({
//         success: true,
//         accounts: newAccounts
//       })
//     } catch (error) {
//       return respont.json({
//         success: false,
//         messages: 'Lỗi Server'
//       })
//     }
//   })
// }
// module.exports = route