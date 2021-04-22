import React from 'react';
import DashboardGridItem from './DashboardGridItem';
import '../css/dashboardCss.css';


const DashboardLayout = () => {
    const layoutInfo = [
        { icon: 'user', itemName:'About' },
        { icon: 'project-diagram', itemName:'Projects' },
        { icon: 'book-open', itemName:'Blogs' },
    ]
    return (
        <div className='dashboardLayout'>{layoutInfo.map(info =>(
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon}/>
            
        ))}</div>
    )
}

export default DashboardLayout