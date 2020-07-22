import React from 'react';
import { connect } from 'react-redux';

import './IntroductionPage.Styles.css';
import { Link } from 'react-router-dom';

import Background from '../../Assets/Daco_77263.png'

const IntroductionPage = ({ comprehensionData }) => {
    const allotedCompany = Math.floor(Math.random()*comprehensionData.length);
    return (
        <div className='introduction-page'>
            <div className='company-introduction'>
                <h1 className='title'>{comprehensionData[allotedCompany].title.toUpperCase()}</h1>
                <div className='body'>
                    <p>{comprehensionData[allotedCompany].intro}{comprehensionData[allotedCompany].intro}{comprehensionData[allotedCompany].intro}{comprehensionData[allotedCompany].intro}{comprehensionData[allotedCompany].intro}</p>
                </div>
                <div className='button'>
                    <button><Link to={'/comprehensionRules/'+comprehensionData[allotedCompany].routeName}>Comprehensions &#8594;</Link></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(IntroductionPage);