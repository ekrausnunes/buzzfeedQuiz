import React, { Component } from 'react';

export default class Questions extends Component {
  render() {
    return(
      <div className="question">
        <h2>{quizQuestions.question}</h2>
          {quizQuestions.options.map(option => (
            <p
              className={`ui floating message options
                ${userChoise === option ? "selected" : null}
              `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
      </div>
    )
  }
}