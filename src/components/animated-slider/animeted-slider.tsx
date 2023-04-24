import { Children, FC, ReactNode } from "react";
import NavigationDots from "../navigation-dots/navigation-dots";
import useSlider from "../../hooks/use-slider";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "./animeted-slider.scss";

type AnimetedSliderProps = {
  parentWidth: number;
  children?: ReactNode | ReactNode[];
};

const AnimetedSlider: FC<AnimetedSliderProps> = (
  props: AnimetedSliderProps
) => {
  console.log("AnimatedSlider");

  const childrenArray = Children.toArray(props.children);

  const { currentIndex: slideIndex, goBack, goNext, goToSlide, play, pause } = useSlider(
    childrenArray.length,
    true
  );

  const slidesContainerStyles = {
    width: props.parentWidth * childrenArray.length,
    transform: `translateX(${-(slideIndex * props.parentWidth)}px)`,
  };

  return (
    <div className="slider">
      <button onClick={()=> {
        console.log("playyy");
        play();
      }}> play slider</button>
      <button onClick={()=> {
        console.log("pauseee");
        pause();
      }}> pause slider</button>
      <div>
        <div onClick={goBack} className="left-arrow">
          <RxCaretLeft />
        </div>
        <div onClick={goNext} className="right-arrow">
          <RxCaretRight />
        </div>
      </div>
      <div className="slides-container-overflow">
        <div style={slidesContainerStyles} className="slides-container">
          {Children.map(props.children, (element, idx) => {
            return (
              <div
                style={{ width: `${props.parentWidth}px` }}
                className="slide"
              >
                {element}
              </div>
            );
          })}
        </div>
      </div>
      <NavigationDots
        amountOfDots={childrenArray.length}
        currentDotIndex={slideIndex}
        goToDot={goToSlide}
      />
    </div>
  );
};

export default AnimetedSlider;
