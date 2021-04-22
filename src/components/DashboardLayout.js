import React from 'react';
import DashboardGridItem from './DashboardGridItem';

import '../css/dashboardCss.css';


const DashboardLayout = () => {
    const layoutInfo = [
        { icon: 'user', itemName: 'About', path: '/about' },
        { icon: 'project-diagram', itemName: 'Projects', path: '/projects' },
        { icon: 'book-open', itemName: 'Blogs', path: '/blogs' }
    ]
    return (
       
            <div className='dashboardLayout'>{layoutInfo.map(info => (
                <DashboardGridItem gridName={info.itemName} gridIcon={info.icon} path={info.path} />
            ))}</div>
            
       
    )
}

export default DashboardLayout