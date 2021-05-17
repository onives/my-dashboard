import React from 'react';
import DashboardGridItem from './DashboardGridItem';

import '../css/dashboardCss.css';


const DashboardNav = () => {
    const layoutInfo = [
        { icon: 'user', itemName: 'About', path: '/dashboard' },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects' },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs' },
        { icon: 'user', itemName: 'Logout', path: '/' }

        
    ]
    return (
            <div className='dashboardNav'>{layoutInfo.map(info => (
                <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} />
            ))}</div>
       
    )
}

export default DashboardNav