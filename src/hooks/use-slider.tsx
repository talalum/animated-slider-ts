import { useEffect, useRef, useState } from "react";

const useSlider = (amountOfSlides: number, shouldLoop: boolean) => {
  console.log("useSlide");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const indexRef = useRef(0);
  const goBack = (): void => {
    const isFirstSlide = currentIndex === 0;
    let newIndex = currentIndex - 1;
    if (shouldLoop) {
      newIndex = isFirstSlide ? amountOfSlides - 1 : currentIndex - 1;
    }
    goToSlide(newIndex);
  };

  const goNext: () => void = () => {
    const isLastSlide = indexRef.current === amountOfSlides - 1;
    let newIndex = indexRef.current + 1;
    if (isLastSlide && shouldLoop) {
      newIndex = isLastSlide ? 0 : indexRef.current + 1;
    }
    goToSlide(newIndex);
  };

  useEffect(() => {
    indexRef.current = currentIndex;
  }, [currentIndex])

  const goToSlide: (slideIndex: number) => void = (slideIndex: number): void => {
    if (slideIndex >= 0 && slideIndex < amountOfSlides) {
      setCurrentIndex(slideIndex);
    }
  };

  const play: () => void = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        goNext();
      }, 2000);
    }
    return () => {
      window.clearInterval(interval);
    };
  }, [isPlaying]);

  const pause: () => void = () => {
    setIsPlaying(false);
  };

  return {
    currentIndex,
    goBack,
    goNext,
    goToSlide,
    play,
    pause,
  };
};

export default useSlider;
