import React, { useContext, useState} from 'react';
import DashboardGridItem from './DashboardGridItem';
import { Button } from './generics/Button';
import AuthContext from './auth/auth-context';
import axios from 'axios';
import env from 'react-dotenv';
import '../css/dashboardCss.css';


const DashboardNav = () => {
    const [dropDown, setDropDown] = useState(false)
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
    const handleDropDown = ()=>{
        setDropDown(!dropDown) 
    }

    return (   
        <div className='dashboardNav'>
            <div className="dropdown">
                <button onClick={handleDropDown} className="dropbtn btn btn--outline btn--medium">Account</button>
                <div className={dropDown? "show dropdown-content" : "dropdown-content"}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--small' onClick={authCtx.onLogout}>Log out</Button>
                    <Button buttonStyle='btn--danger' buttonSize='btn--small' onClick={handleDeleteAccount}>Delete Account</Button>
                </div>
            </div>
            {layoutInfo.map(info => (
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} key={info.id} />
        ))}</div>
        
    )
}

export default DashboardNav
