import React from 'react';
import { Component } from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    state = {
      quiz_position: 1
    };

    render() {
      return (
        <div>
          {/*<div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>*/}
          <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
        </div>
      )
    }
}

export default Quiz;
