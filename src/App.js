import { useState, useRef } from 'react';
import Question from './Question';
import ColumnContainer from './Record';
import Timer from './Timer';
import { data } from './data';
import banner from './image/baner.png';

function App() {
  const [time, setTime] = useState(15);
  const [isActive, setIsActive] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const audioRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <div className='intro'>
          <h1>Hội Thi Tuyên Truyền Công Nghệ Số</h1>
          <div className='banner'>
            <img src={banner} alt='banner' />
          </div>
          <button
            className='btn-grad-2'
            onClick={() => {
              setShowIntro(false);
              setIsActive(true);
              setTime(15);
            }}
          >
            Bắt đầu
          </button>
        </div>
      )}
      {!showIntro && (
        <div className='content'>
          <h1>Hội thi tuyên truyền công nghệ số</h1>
          <Timer
            time={time}
            setTime={setTime}
            isActive={isActive}
            setIsActive={setIsActive}
            audioRef={audioRef}
          />
          <div className='container'>
            {data.map((info) => (
              <Question
                key={info.key}
                info={info}
                questionNumber={info.key}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                dataCount={data.length}
                setTime={setTime}
                setIsActive={setIsActive}
                audioRef={audioRef}
              />
            ))}
            <ColumnContainer />
          </div>
          <div className='reset'>
            <button
              className='btn-grad-2'
              onClick={() => {
                setShowIntro(true);
              }}
            >
              Chơi lại từ đầu
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
