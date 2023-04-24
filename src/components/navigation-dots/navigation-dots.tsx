import React from "react";
import "./navigation-dots.scss";

type navProps = {
  amountOfDots: number;
  currentDotIndex: number;
  goToDot: (index: number) => void;
};

const NavigationDots: React.FC<navProps> = (props) => {
  console.log("NavigationDots");

  const jsxButtonArray = Array.from(
    { length: props.amountOfDots },
    (_, dotIndex: number) => {
      return (
        <button
          key={dotIndex}
          className={ "dot-button "+
            "dot " +
            (props.currentDotIndex === dotIndex ? "selected-button" : "")
          }
          onClick={() => props.goToDot(dotIndex)}
        ></button>
      );
    }
  );

  return <div className="dots-container">{jsxButtonArray}</div>;
};

export default NavigationDots;
