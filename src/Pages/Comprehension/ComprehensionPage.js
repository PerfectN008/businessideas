import React from 'react';
import { connect } from 'react-redux';

import './ComprehensionPage.Styles.css';
import { Link } from 'react-router-dom';

 const ComprehensionPage = ({match, comprehensionData}) => {
    const allotedCompany = comprehensionData.find( company => company.routeName===match.params.companyId );
    const {comprehensions} = allotedCompany;
    const currentComprehension = comprehensions.find( comprehension => comprehension.routeName===match.params.comprehensionId);
    return (
        <div className='comprehension-page'>
            <div className='comprehension'>
                <h1 className='title'>{currentComprehension.name}</h1>
                <p className='body'>{currentComprehension.comprehension}</p>
                <div className='button'>
                    <button><Link to={`${match.url}/questions`}>Questions</Link></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(ComprehensionPage);
