import React, { useState } from 'react';

const teamName = ['CÔNG DÂN SỐ', 'AI', 'CÔNG NGHỆ SỐ', 'TIA NẮNG TRÍ TUỆ'];

const ColumnContainer = () => {
  const [columnHeights, setColumnHeights] = useState([0, 0, 0, 0]);

  const increaseHeight = (index) => {
    const updatedHeights = [...columnHeights];
    if (updatedHeights[index] === 800) return;

    updatedHeights[index] += 25;
    setColumnHeights(updatedHeights);
  };

  const decreaseHeight = (index) => {
    const updatedHeights = [...columnHeights];
    if (updatedHeights[index] === 0) return;
    updatedHeights[index] -= 25;
    setColumnHeights(updatedHeights);
  };

  //   console.log('columnHeights', columnHeights);

  return (
    <div className='column-container'>
      <p className='column-container-title'>Điểm số</p>
      {columnHeights.map((height, index) => (
        <div className='column-wrapper' key={index}>
          <div className='column' style={{ height: height / 1.5 }}>
            <p className='column-text'>{height / 2.5}</p>
          </div>
          <div className='button-group'>
            <button onClick={() => increaseHeight(index)}>+</button>
            <button onClick={() => decreaseHeight(index)}>-</button>
          </div>
          <div className='column-team-name'>ĐỘI {teamName[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default ColumnContainer;
