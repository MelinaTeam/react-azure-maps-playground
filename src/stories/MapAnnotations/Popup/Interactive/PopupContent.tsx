import { useState } from 'react';

const PopupContent = ({ bgColor }: { bgColor: string }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '10px', backgroundColor: bgColor, textAlign: 'center' }}>
      <h3>This is a counter:</h3>
      <p>You have clicked {count} times.</p>
      <button
        style={{
          border: '1px',
          padding: '4px',
          cursor: 'pointer',
          backgroundColor: 'gainsboro',
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button
        style={{
          border: '1px',
          padding: '4px',
          cursor: 'pointer',
          color: 'blue',
          backgroundColor: 'transparent',
        }}
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default PopupContent;
