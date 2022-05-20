import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import Routes from '../routes/Routes'
import Login from './Login/Login'
import Register from './Register/Register'
// import LienHe from './LienHe/LienHe'
import LienHe from './LienHe/LienHe'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Dashboard from './Dashboard/Dashboard.jsx'
import ShowProducts from './ShowProducts/ShowProducts.jsx'
import DonDatHangUser from './DonDatHangUser/DonDatHangUser.jsx'
import CreateProducts from './CreateProducts/CreateProducts.jsx'
import DonDatHangUserCT from '../components/DonDatHangUser/DonDatHangUserCT.jsx'
import DonHangAdmin from './DonHangAdmin/DonHangAdmin.jsx'
import BaoMatThongTin from '../pages/BaoMatThongTin'
import DoiTra from '../pages/DoiTra'
import ChinhSachBaoHanh from '../pages/ChinhSachBaoHanh'
import VanChuyen from '../pages/VanChuyen'
import TinTuc from '../components/TinTuc/TinTuc'


// import LienHe from './LienHe/LienHe'
const Layout = () => {
    return (
        <BrowserRouter>
            <Route exact path="/signIn" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Home />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/catalog" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Catalog />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/Dashboard" render={props => (
                <Dashboard />
            )} />
            <Route exact path="/DonHangAdmin" render={props => (
                <DonHangAdmin />
            )} />

            <Route exact path="/CreateProducts" render={props => (
                <CreateProducts />
            )} />
            <Route exact path="/ShowProducts" render={props => (
                <ShowProducts />
            )} />
            <Route exact path="/cart" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Cart />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/LienHe" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <LienHe />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />

            <Route exact path="/DonDatHangUser" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <DonDatHangUser />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/tintuc" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <TinTuc/>
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />

            <Route exact path="/catalog/:slug" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Product />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />

            <Route exact path="/ChinhSachBaoHanh" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <ChinhSachBaoHanh />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/BaoMatThongTin" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <BaoMatThongTin />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
            <Route exact path="/DoiTra" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <DoiTra />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />

            <Route exact path="/VanChuyen" render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <VanChuyen />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />

        </BrowserRouter>
    )
}

export default Layout