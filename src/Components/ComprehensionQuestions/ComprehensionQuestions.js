import React from 'react';

import './ComprehensionQuestions.Styles.css';

import QuestionCard from '../QuestionCard/QuestionCard'

const ComprehensionQuestions = ({questions}) => {
    const response=[]

    const onChangeMcqs = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onSubmitMcqs = (e) => {
        e.preventDefault();
        const respons = response;
        console.log(respons)
    }

    console.log(response, questions)
    return(
        <div className='mcqs-container' onChange={onChangeMcqs} >
            <form onSubmit={onSubmitMcqs}>
                <div className='mcq-questions'>
                {questions.map( que => <QuestionCard key={que.id} questionDetails={que}></QuestionCard> )}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ComprehensionQuestions;