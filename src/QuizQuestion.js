import React from 'react';
import { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    }
  }

  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      this.setState(prevState => {
        return {incorrectAnswer: false}
      })
    } else {
      this.setState( {incorrectAnswer: true} )
    }
  }

  render() {
    return (
      <main>
        <section>
          <p className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) =>
              <QuizQuestionButton
                key={index}
                button_text={answer_option}
                clickHandler={this.handleClick.bind(this)}
              />)}
            {/*<QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>*/}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
      </main>
    )
  }
}

export default QuizQuestion;
