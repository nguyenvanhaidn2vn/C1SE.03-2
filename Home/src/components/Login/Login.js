import React, { useState, useEffect } from 'react'
import './Login.css';
import axios from 'axios';
import { API_URL, TOKEN, USER_LOGIN } from '../../action/types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Login = () => {
    const [dataAccount,setDataAccount]=useState({phone:'',passWord:'',error:''});
    const user=useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(dataAccount)
    const loginForm = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/api/user/signIn`,dataAccount);
            console.log(response)
            if(response.data.success)
            {
                localStorage.setItem(TOKEN,response.data.token);
                dispatch({type:USER_LOGIN,payload:response.data.user})
                history.push('/')
            }
            else
            {
                setDataAccount({...dataAccount,error:response.data.messages})
            }
        }catch(err){
            alert('Đổi địa chỉ IP đi')
        }
    }
    const onChangeAccount =(event)=>{
        console.log("Hello")
        setDataAccount({...dataAccount,[event.target.name]:event.target.value})
    }
    const loadUser = ()=>{
        if(user.isAuthentication)
            history.push('/')
    }
    useEffect(()=>{
        // loadUser();
    },[])
    return (
        <div className="body-Login">
            <div className="container-Login">
                <div className="forms-Login">
                    <div className="form login">
                        <span className="title">Đăng Nhập</span>

                        <form>
                            <div className="input-field">
                                <input type="text" name="phone" placeholder="Số Điện Thoại" onChange={onChangeAccount} />
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" name="passWord" className="password" placeholder="Nhập mật khẩu" onChange={onChangeAccount} />
                                <i className="uil uil-lock icon"></i>
                                <i className="uil uil-eye-slash showHidePw"></i>
                            </div>

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="logCheck" />
                                    <label for="logCheck" className="text">Ghi nhớ</label>
                                </div>

                                <a href="#" className="text">Quên Mật Khẩu?</a>
                            </div>
                            <div>
                                <p style={{color:"red"}}>{dataAccount.error}</p>
                            </div>
                            <div className="input-field button">
                                <input type="button" onClick={loginForm} value="Đăng Nhập" />
                            </div>
                        </form>

                        <div className="login-signup">
                            <span className="text">Chưa có tài khoản?
                                <a href="/register" className="text signup-link">Đăng Ký</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;