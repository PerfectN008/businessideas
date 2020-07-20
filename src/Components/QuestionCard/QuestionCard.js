import React from 'react';

import './QuestionCard.Styles.css';

const QuestionCard = ({questionDetails}) => {
    const { id, question, options } = questionDetails;

    return(
        <div className='mcq-container'>
            <div className='mcq'>
                <h2>0{id}</h2>
                <h3>{question}</h3>
                {
                    options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name={id} value={option} /><label>{option.toUpperCase()}</label></div> )
                }
            </div>
        </div>
    )
}

export default QuestionCard