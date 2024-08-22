import { useState } from "react";

const FooterCard = () => {
  const [count, setCount] = useState(0);

  const handleIncreas = () => {
    setCount(count + 1);
  };
  const handleDeacrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <button onClick={handleIncreas}>+</button>
        <br />
        <p>count: {count}</p>
        <br />

        <button onClick={handleDeacrease}>-</button>
      </div>
    </>
  );
};

export default FooterCard;
