import React from 'react';

import './QuestionCard.Styles.css';

const QuestionCard = ({questionDetails}) => {
    const { id, question, options, correctOption } = questionDetails;

    const response=[]

    const onChangeMcqs = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onSubmitMcqs = (e) => {
        e.preventDefault();
        const respons = response;
        console.log(respons);
    }
    return(
        <div className='mcq-container'>
            <div className='mcq' onChange={onChangeMcqs}>
                <h2>0{id}</h2>
                <h3>{question}</h3>
                <form onSubmit={onSubmitMcqs}>
                    {
                        options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name={id} value={option} /><label>{option.toUpperCase()}</label></div> )
                    }
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionCard