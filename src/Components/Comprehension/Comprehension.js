import React from 'react';
import ComprehensionQuestions from '../ComprehensionQuestions/ComprehensionQuestions';

const Comprehension = ({comp}) => {
    const {id, name, comprehension, questions} = comp
    return(
        <div>
            <h2>{name}</h2>
            <p>{comprehension}</p>
            <ComprehensionQuestions questions={questions} />
        </div>
    )
}

export default Comprehension;