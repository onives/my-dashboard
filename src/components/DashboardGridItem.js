import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const DashboardGridItem = ({gridName, gridIcon, path}) => {
    return (
        <div className='dashboardGrid'>
            <Link to={path}><FontAwesomeIcon icon={gridIcon}/></Link>
            <p>{gridName}</p>
        </div>
    )
}

export default DashboardGridItem;