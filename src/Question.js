import React, { useEffect, useState } from 'react';

const MultipleChoiceQuestion = ({
  info,
  questionNumber,
  activeQuestion,
  setActiveQuestion,
  dataCount,
  setTime,
  setIsActive
}) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    setShowCorrectAnswer(false);
  }, []);

  return (
    <div
      className={`question-container ${
        questionNumber === activeQuestion ? 'show' : ''
      }`}
    >
      <div className='question-top'>
        <h3 className='question-prompt'>
          {questionNumber + 1}/ {info.question}
        </h3>
        <div
          className={`answer-options ${showCorrectAnswer ? 'showAnswer' : ''}`}
        >
          <div
            className={`answer-option ${
              info.correctAnswer === 0 ? 'correct-answer' : ''
            }`}
          >
            <p>A. {info.answers[0]}</p>
          </div>
          <div
            className={`answer-option ${
              info.correctAnswer === 1 ? 'correct-answer' : ''
            }`}
          >
            <p>B. {info.answers[1]}</p>
          </div>
          <div
            c
            className={`answer-option ${
              info.correctAnswer === 2 ? 'correct-answer' : ''
            }`}
          >
            <p>C. {info.answers[2]}</p>
          </div>
          <div
            className={`answer-option ${
              info.correctAnswer === 3 ? 'correct-answer' : ''
            }`}
          >
            <p>D. {info.answers[3]}</p>
          </div>
        </div>
      </div>

      <div className='question-bottom'>
        <button
          onClick={() => setActiveQuestion(questionNumber - 1)}
          className={`btn-grad ${
            activeQuestion === questionNumber ? 'show' : ''
          }`}
          disabled={questionNumber === 0}
        >
          Back
        </button>
        <button onClick={() => setShowCorrectAnswer(true)} className='btn-grad'>
          Hiển thị đáp án
        </button>
        <button
          onClick={() => {
            setActiveQuestion(questionNumber + 1);
            setTime(90);
            setIsActive(true);
          }}
          className={`btn-grad ${
            activeQuestion === questionNumber ? 'show' : ''
          }`}
          disabled={questionNumber === dataCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
