import React from 'react';

import './ComprehensionHeader.Styles.css'

const ComprehensionHeader = ({heading}) => {
    return(
        <div className='comprehension-header'>
            <h1>{heading}</h1>
        </div>
    )
};

export default ComprehensionHeader;