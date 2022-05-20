import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo5.png'
import './Header.css'
const mainNav = [

    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Tin Tức ",
        path: "/tintuc"
    },
    {
        display: "Liên hệ",
        path: "/lienhe"
    },
    
]

const Header = () => {
    
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null) 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')
    const user =useSelector(state=>state.user)
    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                            
                        }
                        <div class="dropdown">
                            <div className='header__menu__item header__menu__left__item nut_dropdown'>
                                <span className="nut_dropdown"><Link to={"/"}>Chính sách</Link></span>
                            </div>
                            <div className="noidung_dropdown">
                                <Link to="/ChinhSachBaoHanh">Bảo hành</Link>
                                <Link to="/BaoMatThongTin">Bảo mật thông tin</Link>
                                <Link to="/DoiTra">Đổi trả</Link>
                                <Link to="/VanChuyen">Vận chuyển</Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
