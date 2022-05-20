import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Dashboard from '../components/Dashboard/Dashboard'
import ShowProducts from '../components/ShowProducts/ShowProducts.jsx'
import DonHangAdmin from '../components/DonHangAdmin/DonHangAdmin.jsx'
// import CreateProducts from '../components/CreateProducts/CreateProducts'
const Routes = () => {
    return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='catalog/:slug' component={Product}/>
                <Route exact path='catalog' component={Catalog}/>
                <Route exact path='cart' component={Cart}/>
                <Route exact path='Dashboard' component={Dashboard}/>
                <Route exact path='ShowProducts' component={ShowProducts}/>
                <Route exact path='DonHangAdmin' component={DonHangAdmin}/>
                {/* <Route exact path='CreateProducts' component={CreateProducts}/> */}
                {/* <Route exact exact path='/login'component={Login}/> */}
            </Switch>
    )
}

export default Routes
