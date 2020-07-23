import React from 'react';

import './ComprehensionQuestions.Styles.css';

import QuestionCard from '../QuestionCard/QuestionCard'

const ComprehensionQuestions = ({questions}) => {
    return(
        <div className='mcqs-container'>
            <div>
                <div className='mcq-questions'>
                    {questions.map( que => <QuestionCard key={que.id} questionDetails={que}></QuestionCard> )}
                </div>
            </div>
        </div>
    )
}

export default ComprehensionQuestions;