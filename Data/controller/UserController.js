const UserModel = require('../Collection/User');
const jwt = require('jsonwebtoken');

class UserController{
    //signIn
    async signIn (request, response){
        const { phone, passWord } = request.body;
        console.log(phone,passWord)
        try {
          const findUser = await UserModel.findOne({ phone })
          console.log(findUser)
          if (findUser) {
            if (passWord === findUser.passWord) {
              const token = await jwt.sign({ _id: findUser._id }, 'abcbca123')
              return response.json({
                success: true,
                messages: 'Đăng nhập thành công',
                token,
                user:findUser
              })
            }
            else
              return response.json({
                success: false,
                messages: 'Sai mật khẩu',
              })
          }
          else
            return response.json({
              success: false,
              messages: 'Tài khoản không tồn tại'
            })
        } catch (error) {
          console.log(error.toString())
          return response.json({
            success: false,
            messages: 'Lỗi Server'
          })
        }
    }
    //Register
     async Register (request, response) {
        const { name, phone, passWord } = request.body;
        try {
          const findUser = await UserModel.findOne({ phone });
          if (findUser)
            return response.json({
              success: false,
              messages: 'Tài khoản tồn tại rồi'
            })
          else {
            const User = new UserModel({
              name,
              phone,
              passWord,
            })
            const newUser = await User.save()
            return response.json({
              success: true,
              User: newUser,
              messages:"tạo tài khoản thành công"
            })
          }
    
        } catch (error) {
          console.log(error)
          return response.json({
            success: false,
            messages: 'Lỗi Server'
          })
        }
}
    ///update-Users/:id
    async updateUser (request, response) {
        try {
          const {
            Name,
            gmail,
            gender,
          } = request.body
          if (!Name)
            return response.json({
              success: false,
              messages: 'Name khong duoc de trong'
            })
          
          else if (!gmail)
            return response.json({
              success: false,
              messages: 'gmail khong duoc de trong'
            })
          else if (!gender)
            return response.json({
              succes: false,
              messages: 'bạn chưa thay đổi giới tính'
            })  
          else {
            const updatedUsers = await User.findByIdAndUpdate(request.params.id, {
              Name,
              gmail,
              gender
            }, { new: true })
            if (updatedUsers) {
              return response.json({
                success: true,
                updatedUsers: {
                  _id: updatedUsers._id,
                  Name:updatedUsers.Name,
                  gmail:updatedUsers.gmail,
                  gender:updatedUsers.gender,
                }
                
              })
            } else{
                return response.json({
                  success:false,
                  messages:'Loi Server'
                })
            }
    
          }
        } catch (error) {
            return response.json({
              success:false,
              messages:'Loi Server'
            })
        }
      }
}

module.exports= new UserController();