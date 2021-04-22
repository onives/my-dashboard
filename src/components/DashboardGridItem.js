import React from 'react';

const DashboardGridItem = ({gridName, gridIcon}) => {
    return (
        <div className='dashboardGrid'>
            <span>{gridIcon}</span>
            <p>{gridName}</p>
        </div>
    )
}

export default DashboardGridItem;