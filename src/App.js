import { useState } from 'react';
import Question from './Question';
import ColumnContainer from './Record';
import { data } from './data';

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <>
      <h1>Hội thi tuyên truyền công nghệ số</h1>
      <div className='container'>
        {data.map((info) => (
          <Question
            key={info.key}
            info={info}
            questionNumber={info.key}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            dataCount={data.length}
          />
        ))}
        <ColumnContainer />
      </div>
    </>
  );
}

export default App;
