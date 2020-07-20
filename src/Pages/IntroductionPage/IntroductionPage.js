import React from 'react';
import { connect } from 'react-redux';

import './IntroductionPage.Styles.css';
import { Link } from 'react-router-dom';

const IntroductionPage = ({ comprehensionData }) => {
    console.log(comprehensionData)
    return (
        <div className='introduction-page'>
            <div className='comapny-introduction'>
                <h1>{comprehensionData[0].title}</h1>
                <p>{comprehensionData[0].intro}</p>
                <p>{comprehensionData[0].intro}</p>
                <Link to={'/comprehension/'+comprehensionData[0].routeName}><span>Comprehension</span></Link>
            </div>
         </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(IntroductionPage);
