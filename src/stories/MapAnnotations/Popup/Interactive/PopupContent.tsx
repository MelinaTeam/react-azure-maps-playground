const PopupContent = ({ text }: { text: string }) => {
  const handleClick = () => {
    alert(text);
  };
  // use position as argument would be better
  return (
    <div>
      <button
        style={{ height: '100px', width: '120px', border: '1px', padding: '4px', cursor: 'pointer' }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default PopupContent;
