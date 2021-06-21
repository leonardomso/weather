import React from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import TemperatureButtons from "../../components/TemperatureButtons/TemperatureButtons";
import ArrowsButtons from "../../components/ArrowsButtons/ArrowsButtons";
import WeatherForecastItem from "../../components/WeatherForecastItem/WeatherForecastItem";

import { useWeather } from "src/queries/";

const WeatherInfo = () => {
  const { data } = useWeather();

  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: 3,
    spacing: 25,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  });

  const previousSlide = (e: any) => {
    e.stopPropagation() || slider.prev();
  };

  const nextSlide = (e: any) => {
    e.stopPropagation() || slider.next();
  }

  const isFirst: boolean = currentSlide === 0;
  const isLast: boolean = typeof slider?.details().slidesPerView === "number" && currentSlide === slider?.details().size - slider?.details().slidesPerView;

  return (
    <Grid templateRows="max-content max-content max-content" gap={5} width="100%" height="100vh" maxW="600px" margin="0 auto">
      <TemperatureButtons />

      <ArrowsButtons
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <Box ref={sliderRef} className="keen-slider">
        <WeatherForecastItem number={1} />
        <WeatherForecastItem number={2} />
        <WeatherForecastItem number={3} />
        <WeatherForecastItem number={4} />
        <WeatherForecastItem number={5} />
        <WeatherForecastItem number={6} />
        <WeatherForecastItem number={7} />
        <WeatherForecastItem number={8} />
        <WeatherForecastItem number={9} />
      </Box>
    </Grid>
  );
}

export default WeatherInfo;
