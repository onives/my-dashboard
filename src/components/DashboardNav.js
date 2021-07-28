import React, { useContext } from 'react';
import DashboardGridItem from './DashboardGridItem';
import { Button } from './generics/Button'
import AuthContext from './auth/auth-context';

import '../css/dashboardCss.css';


const DashboardNav = () => {
    const authCtx = useContext(AuthContext);
    const layoutInfo = [
        { icon: 'user', itemName: 'About', path: '/dashboard', id: 1 },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects', id: 2 },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs', id: 3 },
    ]
    return (
            
        <div className='dashboardNav'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={authCtx.onLogout}>Log out</Button>
            {layoutInfo.map(info => (
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} key={info.id} />
        ))}</div>
        
    )
}

export default DashboardNav