import React from 'react';
import { connect } from 'react-redux';

import './ComprehensionPage.Styles.css';
import ComprehensionHeader from '../../Components/ComprehensionHeader/ComprehensionHeader';
import Comprehension from '../../Components/Comprehension/Comprehension';

 const ComprehensionPage = ({match, comprehensionData}) => {
    const allotedCompany = comprehensionData.find( comapny => comapny.routeName===match.params.companyId )
    return (
        <div className='comprehension-page'>
            <ComprehensionHeader heading={allotedCompany.title} />
            {allotedCompany.comprehensions.map( comprehension => <Comprehension key={comprehension.id} comp={comprehension} /> )}
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(ComprehensionPage);
