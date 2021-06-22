import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

const useSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: 3,
    spacing: 25,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const previousSlide = (e: any) => {
    e.stopPropagation() || slider.prev();
  };

  const nextSlide = (e: any) => {
    e.stopPropagation() || slider.next();
  };

  // Check if card is the first one to disabled 'previous' button.
  const isFirst: boolean = currentSlide === 0;
  // Check if card is the last one to disabled 'next' button.
  const isLast: boolean =
    typeof slider?.details().slidesPerView === "number" &&
    currentSlide === slider?.details().size - slider?.details().slidesPerView;

  return {
    slider,
    sliderRef,
    currentSlide,
    previousSlide,
    nextSlide,
    isFirst,
    isLast,
  };
};

export default useSlide;
