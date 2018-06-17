import Vue from 'vue'
import Router from 'vue-router'
import JQuery from '@page/jquery/JQuery'
import Bootstrap from '@page/bootstrap/Bootstrap'
import Axios from '@page/axios/Axios'
import ECharts from '@page/echarts/ECharts'

import index from '@page/index/index'
import Classification from '@page/Classification/Classification'
import ShoppingCart from '@page/shopping-cart/ShoppingCart'
import ShoppingCartNull from '@page/shopping-cart/ShoppingCartNull'
import Information from '@page/Information/Information'
import PersonalData from '@page/Information/PersonalData'
import Address from '@page/Information/Address'
import BookDetails from '@page/book-details/BookDetails'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },         
        {
            path: '/classification',
            name: 'Classification',
            component: Classification
        },
        {
            path: '/shoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path: '/shoppingCartNull',
            name: 'ShoppingCartNull',
            component: ShoppingCartNull
        },
        {
            path: '/information',
            name: 'Information',
            component: Information
        },
        {
            path: '/bookdetails',
            name: 'BookDetails',
            component: BookDetails
        },
        {
            path: '/personaldata',
            name: 'PersonalData',
            component: PersonalData
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },


        {
            path: '/axios',
            name: 'Axios',
            component: Axios
        },
        {
            path: '/bootstrap',
            name: 'Bootstrap',
            component: Bootstrap
        },
       
        {
            path: '/jquery',
            name: 'JQuery',
            component: JQuery
        },
        {
            path: '/echarts',
            name: 'ECharts',
            component: ECharts
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})
