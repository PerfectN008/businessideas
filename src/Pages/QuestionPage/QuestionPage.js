import React from 'react';

import './QuestionPage.Styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const QuestionPage = ({match, comprehensionData}) => {
    const allotedCompany = comprehensionData.find( company => company.routeName===match.params.companyId );
    const {comprehensions} = allotedCompany;
    const currentComprehension = comprehensions.find( comprehension => comprehension.routeName===match.params.comprehensionId);
    const nextComprehension = comprehensions.find( comprehension => comprehension.id===currentComprehension.id+1 );
    return(
        <div>
            <h1>{currentComprehension.name+' Questions'}</h1>
            {currentComprehension.questions.map( que => <p key={que.id}>{que.question}</p> )}
            { nextComprehension ? 
                <Link to={'/comprehension/'+allotedCompany.routeName+'/'+nextComprehension.routeName}>Next</Link>
                : <Link to={'/whatnext'}>Next</Link>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(QuestionPage);