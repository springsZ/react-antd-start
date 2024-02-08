import {lazy} from 'react';
import { useRoutes } from 'react-router-dom';
import homeItem from './router'
import Home from '../pages/Home'
const Login = lazy(()=>import('../pages/Login'))
const routes = [
 {
    path: '/login',
    element:<Login/>,
 } ,  
    
 {
    path: '/',
    element: <Home/>,
    children: homeItem
 }
]

export default function Router() {
    return useRoutes(routes)
}