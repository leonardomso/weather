import { useState } from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import TemperatureButtons from "../../components/TemperatureButtons/TemperatureButtons";
import ArrowsButtons from "../../components/ArrowsButtons/ArrowsButtons";
import WeatherForecastItem from "../../components/WeatherForecastItem/WeatherForecastItem";

import { useWeather } from "src/queries/";

const WeatherInfo = () => {
  const [temperature, setTemperature] = useState<"metric" | "imperial">("metric");

  const onChangeTemperature = () => {
    if (temperature === "metric") setTemperature("imperial");
    else setTemperature("metric");
  };

  const { data } = useWeather(temperature);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
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
      <TemperatureButtons
        temperature={temperature}
        onChangeTemperature={onChangeTemperature}
      />

      <ArrowsButtons
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <Box ref={sliderRef} className="keen-slider">
        <WeatherForecastItem slideNumber={1} />
        <WeatherForecastItem slideNumber={2} />
        <WeatherForecastItem slideNumber={3} />
        <WeatherForecastItem slideNumber={4} />
        <WeatherForecastItem slideNumber={5} />
        <WeatherForecastItem slideNumber={6} />
        <WeatherForecastItem slideNumber={7} />
        <WeatherForecastItem slideNumber={8} />
        <WeatherForecastItem slideNumber={9} />
      </Box>
    </Grid>
  );
}

export default WeatherInfo;
