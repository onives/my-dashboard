import React, { useContext, useState } from 'react';
import DashboardGridItem from './DashboardGridItem';
import { Button } from './generics/Button';
import AuthContext from './auth/auth-context';
import axios from 'axios';
import env from 'react-dotenv';

import '../css/dashboardCss.css';


const DashboardNav = () => {
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const layoutInfo = [
        { icon: 'user', itemName: 'About', path: '/dashboard', id: 1 },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects', id: 2 },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs', id: 3 },
    ]

    const handleDeleteAccount = ()=>{
        alert("Are you sure you want to delete this account?");
        axios.delete(`${env.remoteApi}user/me`, {headers: { 'Authorization': `Bearer ${token}`}})
        .then(res=>{
            const response = res.data.message
            setTimeout(()=>{
                alert(response)
            }, 2000) 
            authCtx.onLogout()
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
            
        <div className='dashboardNav'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={authCtx.onLogout}>Log out</Button>
            <Button buttonStyle='btn--danger' buttonSize='btn--small' onClick={handleDeleteAccount}>Delete account</Button>
            {layoutInfo.map(info => (
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} key={info.id} />
        ))}</div>
        
    )
}

export default DashboardNav
