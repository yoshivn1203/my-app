import React, { useState } from 'react';

const ColumnContainer = () => {
  const [columnHeights, setColumnHeights] = useState([0, 0, 0, 0]);

  const increaseHeight = (index) => {
    const updatedHeights = [...columnHeights];
    if (updatedHeights[index] === 500) return;

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
          <div className='column' style={{ height }}>
            <p className='column-text'>{height / 2.5}</p>
          </div>
          <div className='button-group'>
            <button onClick={() => increaseHeight(index)}>+</button>
            <button onClick={() => decreaseHeight(index)}>-</button>
          </div>
          <div className='column-team-name'>Đội {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default ColumnContainer;
