import React from 'react';
import DashboardGridItem from './DashboardGridItem';
import { Button } from './generics/Button'

import '../css/dashboardCss.css';


const DashboardNav = () => {
    const layoutInfo = [
        { icon: 'user', itemName: 'About', path: '/dashboard' },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects' },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs' },
     

        
    ]
    return (
            
        <div className='dashboardNav'>
            <Button buttonStyle='btn--outline' buttonSize='btn--small'>Log out</Button>
            {layoutInfo.map(info => (
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} />
        ))}</div>
        
    )
}

export default DashboardNav