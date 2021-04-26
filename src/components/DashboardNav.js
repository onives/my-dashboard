import React from 'react';
import DashboardGridItem from './DashboardGridItem';

import '../css/dashboardCss.css';


const DashboardNav = () => {
    const layoutInfo = [
        { icon: 'book-open', itemName: 'Home', path: '/' },
        { icon: 'user', itemName: 'About', path: '/about' },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects' },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs' }
        
    ]
    return (
            <div className='dashboardNav'>{layoutInfo.map(info => (
                <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} />
            ))}</div>
       
    )
}

export default DashboardNav