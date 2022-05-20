import React, { useState, useEffect } from 'react'
import './Register.css';
import axios from 'axios';
import { API_URL } from '../../action/types';
export default function Register (){
    const [data,setData] = useState({
        name:'',
        phone:'',
        passWord:'',
        confirmpassWord:'',
        error:''
    });
    console.log(data)
    const onChangeData=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        if(data.confirmpassWord!=data.passWord)
            setData({...data,error:"password và confirmpassword không giống nhau"})
        else    
            try{
                const response=await axios.post(`${API_URL}/api/user/Register`,data);
                console.log(response)
                if(response.data.success)
                    alert('Tạo tài khoản thành công')
                else
                    alert(response.data.messages)
            }catch (error) {
                console.log(error.toString())
                alert('Tạo tài khoản không thành công')
            }
    }
    return (
        <div class="body-Register">
            <div class="container-Register">
                <div class="forms-Register">
                    {/* Register */}
                    <div class="form signup">
                        <span class="title">Đăng Ký</span>

                        <form onSubmit={onSubmit}>
                            <div class="input-field">
                                <input type="text" name="name" placeholder="Nhập họ tên" onChange={onChangeData} />
                                <i class="uil uil-user"></i>
                            </div>
                            <div class="input-field">
                                <input type="text" name="phone" placeholder="Nhập số điện thoại" onChange={onChangeData} />
                                <i class="uil uil-envelope icon"></i>
                            </div>
                            <div class="input-field">
                                <input type="password" name="passWord" class="password" placeholder="Tạo mật khẩu" onChange={onChangeData} />
                                <i class="uil uil-lock icon"></i>
                            </div>
                            <div class="input-field">
                                <input type="password" name="confirmpassWord" class="password" placeholder="Xác nhận mật khẩu" onChange={onChangeData} />
                                <i class="uil uil-lock icon"></i>
                                <i class="uil uil-eye-slash showHidePw"></i>
                            </div>
                            <div>
                                <p style={{color:"red"}}>{data.error}</p>
                            </div>
                            <div class="checkbox-text">
                                <div class="checkbox-content">
                                    <input type="checkbox" id="sigCheck" />
                                    <label for="sigCheck" class="text">Ghi Nhớ</label>
                                </div>

                                <a href="#" class="text">Quên Mật Khẩu?</a>
                            </div>

                            <div class="input-field button">
                                <input type="submit" value="Đăng Ký" />
                            </div>
                        </form>

                        <div class="login-signup">
                            <span class="text">Đã có tài khoản?
                                <a href="/signIn" class="text login-link">Đăng Nhập</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
