import React, { useEffect, useState } from 'react';

const MultipleChoiceQuestion = ({
  info,
  questionNumber,
  activeQuestion,
  setActiveQuestion,
  dataCount,
  setTime,
  setIsActive,
  audioRef
}) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showError, setShowError] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setShowCorrectAnswer(false);
  }, []);

  const handleSelectAnswer = (index) => {
    if (index !== info.correctAnswer) {
      const audioElement = new Audio('wrong.mp3');
      audioElement.play();
      setShowError((oldValue) => {
        const temp = [...oldValue];
        temp[index] = 1;
        return temp;
      });
    } else {
      setShowCorrectAnswer(true);
      setTime(0);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      const audioElement = new Audio('correct.mp3');
      audioElement.play();
    }
  };

  return (
    <div
      className={`question-container ${
        questionNumber === activeQuestion ? 'show' : ''
      }`}
    >
      <div className='question-top'>
        {info.sub && <p style={{ color: 'yellow' }}>( {info.sub} )</p>}
        <h3 className='question-prompt'>
          {questionNumber + 1}/ {info.question}
        </h3>
        <div
          className={`answer-options ${showCorrectAnswer ? 'showAnswer' : ''}`}
        >
          <div
            className={`answer-option ${
              info.correctAnswer === 0 ? 'correct-answer' : ''
            } ${showError[0] === 1 ? 'wrong-answer' : ''}`}
            onClick={() => handleSelectAnswer(0)}
          >
            <p>A. {info.answers[0]}</p>
          </div>
          <div
            className={`answer-option ${
              info.correctAnswer === 1 ? 'correct-answer' : ''
            } ${showError[1] === 1 ? 'wrong-answer' : ''}`}
            onClick={() => handleSelectAnswer(1)}
          >
            <p>B. {info.answers[1]}</p>
          </div>
          <div
            c
            className={`answer-option ${
              info.correctAnswer === 2 ? 'correct-answer' : ''
            } ${showError[2] === 1 ? 'wrong-answer' : ''}`}
            onClick={() => handleSelectAnswer(2)}
          >
            <p>C. {info.answers[2]}</p>
          </div>
          {info.answers[3] && (
            <div
              className={`answer-option ${
                info.correctAnswer === 3 ? 'correct-answer' : ''
              } ${showError[3] === 1 ? 'wrong-answer' : ''}`}
              onClick={() => handleSelectAnswer(3)}
            >
              <p>D. {info.answers[3]}</p>
            </div>
          )}
        </div>
      </div>

      <div className='question-bottom'>
        <button
          onClick={() => {
            setActiveQuestion(questionNumber - 1);
            setTime(0);
            setIsActive(true);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }}
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
            setTime(15);
            setIsActive(true);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
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
