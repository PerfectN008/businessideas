import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './IntroductionPage.Styles.css';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';

const IntroductionPage = ({ comprehensionData }) => {
    const allotedCompany = Math.floor(Math.random()*comprehensionData.length);
    return (
        <div className='introduction-page'>
            <div className='company-introduction'>
                <Header heading={comprehensionData[allotedCompany].title} />
                <div className='body'>
                    <p></p>
                </div>
                <Body body={comprehensionData[allotedCompany].intro + comprehensionData[allotedCompany].intro + comprehensionData[allotedCompany].intro + comprehensionData[allotedCompany].intro + comprehensionData[allotedCompany].intro} />
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