import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardGridItem = ({gridName, gridIcon}) => {
    return (
        <div className='dashboardGrid'>
            <FontAwesomeIcon icon={gridIcon}/>
            <p>{gridName}</p>
        </div>
    )
}

export default DashboardGridItem;