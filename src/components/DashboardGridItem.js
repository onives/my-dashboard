import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const DashboardGridItem = ({ gridName, gridIcon, path }) => {
    return (
            <ul className='nav-links'>
                <Link to={path}><li>{gridName}</li> <FontAwesomeIcon icon={gridIcon} /></Link> 
            </ul>
    )
}

export default DashboardGridItem;
