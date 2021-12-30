import React, { useState, useEffect, useRef } from 'react';
import { StyledSquare } from './Square.styles';

const classList = {
  ONE: 'afterOne',
  THREE: 'afterThree',
};

const Square = () => {
  const squareRef = useRef(null);
  const [clicks, setClicks] = useState(0);

  const afterOneClick = () => {
    squareRef.current.classList.add(classList.ONE);
  };
  const afterThreeClicks = () => {
    squareRef.current.classList.remove(classList.ONE);
    squareRef.current.classList.add(classList.THREE);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      squareRef.current.classList.remove(classList.ONE);
      squareRef.current.classList.remove(classList.THREE);
      setClicks(0);
    }, 2000);

    if (clicks === 1) {
      afterOneClick();
    } else if (clicks >= 3) {
      afterThreeClicks();
    }

    return () => clearTimeout(timer);
  }, [clicks]);

  const addClick = () => {
    setClicks(clicks + 1);
  };

  return <StyledSquare ref={squareRef} className="square" onClick={addClick}></StyledSquare>;
};

export default Square;
