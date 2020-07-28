import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ComprehensionPage.Styles.css';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';

 const ComprehensionPage = ({match, comprehensionData}) => {
    const allotedCompany = comprehensionData.find( company => company.routeName===match.params.companyId );
    const {comprehensions} = allotedCompany;
    const currentComprehension = comprehensions.find( comprehension => comprehension.routeName===match.params.comprehensionId);
    return (
        <div className='comprehension-page'>
            <div className='comprehension-image' >
                <img src={require('../../Assets/'+currentComprehension.routeName+'.svg')} alt='ComprehensionImage'/>
            </div>
            <div className='comprehension'>
                <Header heading={currentComprehension.name} />
                <Body body={currentComprehension.comprehension} />
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
