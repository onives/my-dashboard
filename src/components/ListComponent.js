import React from 'react';

const ListComponent = ({listImage, listTitle, listParagraph, listGitLink, listSiteLink})=>{

    return(
        <div>
            <ul>
                <li>{listImage}</li>
                <li>{listTitle}</li>
                <li>{listParagraph}</li>
                <li>{listGitLink}</li>
                <li>{listSiteLink}</li>
            </ul>
        </div>
    )
}
export default ListComponent;