import { useState } from 'react';
import Question from './Question';
import ColumnContainer from './Record';
import Timer from './Timer';
import { data } from './data';

function App() {
  const [time, setTime] = useState(90);
  const [isActive, setIsActive] = useState(true);

  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <>
      <h1>Hội thi tuyên truyền công nghệ số</h1>
      <Timer
        time={time}
        setTime={setTime}
        isActive={isActive}
        setIsActive={setIsActive}
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
          />
        ))}
        <ColumnContainer />
      </div>
      <div className='reset'>
        <button className='btn-grad-2' onClick={() => window.location.reload()}>
          Chơi lại từ đầu
        </button>
      </div>
    </>
  );
}

export default App;
