import React from 'react';
import DashboardGridItem from './DashboardGridItem';
import '../css/dashboardCss.css';


const DashboardLayout = () => {
    const layoutInfo = [
        { icon: 'icon1', itemName:'About' },
        { icon: 'icon2', itemName:'Projects' },
        { icon: 'icon3', itemName:'Blogs' }
    ]
    return (
        <div className='dashboardLayout'>{layoutInfo.map(info =>(
            <DashboardGridItem gridName={info.itemName} gridIcon={info.icon}/>
        ))}</div>
    )
}

export default DashboardLayout