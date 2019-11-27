import React, { Component } from 'react';
import { quizQuestions } from './quizQuestions';

export default class Body extends Component {
  state = {
    score: 0,
    userChoise1: null,
    userChoise2: null,
    userChoise3: null
  };

  checkAnswer = (answer, correctAnswer, id) => {
    const { score, userChoise1, userChoise2, userChoise3 } = this.state;

    switch (id) {
      case 0:
        if (answer === correctAnswer && userChoise1 === null) {
          this.setState({
            score: score + 1
          });
        }
        this.setState({ userChoise1: answer});
        break;
        
      case 1:
        if (answer === correctAnswer && userChoise2 === null) {
          this.setState({
            score: score + 1
          });
        }
        this.setState({ userChoise2: answer});
        break;  

      case 2:
        if (answer === correctAnswer && userChoise3 === null) {
          this.setState({
            score: score + 1
          });
        }
        this.setState({ userChoise3: answer});
        break;    

      default:
        break;  
    }
    console.log(id, answer, correctAnswer, userChoise1, userChoise2, userChoise3)
  };

  restartQuizQuestions = () => {
    this.setState(() => {
      return {
        score: 0,
        userChoise1: null,
        userChoise2: null,
        userChoise3: null
      }
    })
  }

  render() {
    const {
      userChoise1,
      userChoise2,
      userChoise3
    } = this.state;

    return(
      <div className="formQuiz">
        
        <div className="question">
          <h2 data-test="pergunta" data-resposta={` 
            ${quizQuestions[0].answer === userChoise1
            ? "correta" : "errada" }
          `}>{quizQuestions[0].question}</h2>
          
          <ul data-resposta={quizQuestions[0].answer}>
            {quizQuestions[0].options.map((option) => (
              <li data-test="opcao"
                disabled={this.state.disabled}
                className={`ui floating message options
                  ${userChoise1 === option ? "selected" : null}
                `}
                onClick={() => this.checkAnswer(option, 
                                                quizQuestions[0].answer, 
                                                quizQuestions[0].id)}
              >
                {option}
              </li>
            ))}
          </ul>

        </div>

        <div className="question">
          <h2 data-test="pergunta" data-resposta={` 
            ${quizQuestions[1].answer === userChoise2
            ? "correta" : "errada" }
          `}>{quizQuestions[1].question}</h2>
          
          <ul data-resposta={quizQuestions[1].answer}>
            {quizQuestions[1].options.map((option) => (
              <li data-test="opcao"
                className={`ui floating message options
                  ${userChoise2 === option ? "selected" : null}
                `}
                onClick={() => this.checkAnswer(option, 
                                                quizQuestions[1].answer,
                                                quizQuestions[1].id)}
              >
                {option}
              </li>
            ))}
          </ul>

        </div>

        <div className="question">
          <h2 data-test="pergunta" data-resposta={` 
            ${quizQuestions[2].answer === userChoise3
            ? "correta" : "errada" }
          `}>{quizQuestions[2].question}</h2>
          
          <ul>
            {quizQuestions[2].options.map((option) => (
              <li data-test="opcao"
                className={`ui floating message options
                  ${userChoise3 === option ? "selected" : null}
                `}
                onClick={() => this.checkAnswer(option, 
                                                quizQuestions[2].answer,
                                                quizQuestions[2].id)}
              >
                {option}
              </li>
            ))}
          </ul>

        </div>

        <h3 data-resultado={this.state.score}>Você acertou {this.state.score} de 3 perguntas! </h3>
        <button data-test="refazer" onClick={() => this.restartQuizQuestions()}>Refazer quiz!</button>
      </div>
    )
  }
}