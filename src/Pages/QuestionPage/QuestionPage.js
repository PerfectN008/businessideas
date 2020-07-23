import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './QuestionPage.Styles.css';

import Header from '../../Components/Header/Header';
import ComprehensionQuestions from '../../Components/ComprehensionQuestions/ComprehensionQuestions';

const QuestionPage = ({match, comprehensionData}) => {
    const allotedCompany = comprehensionData.find( company => company.routeName===match.params.companyId );
    const {comprehensions} = allotedCompany;
    const currentComprehension = comprehensions.find( comprehension => comprehension.routeName===match.params.comprehensionId);
    const nextComprehension = comprehensions.find( comprehension => comprehension.id===currentComprehension.id+1 );
    return(
        <div className='questions-page'>
            <Header heading={currentComprehension.name+' Questions'} />
            <ComprehensionQuestions questions={currentComprehension.questions} />
            <div className='button'>
                <button>
                    { nextComprehension ? 
                        <Link to={'/comprehension/'+allotedCompany.routeName+'/'+nextComprehension.routeName}>Next</Link>
                        : <Link to={'/whatnext'}>Next</Link>
                    }
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(QuestionPage);