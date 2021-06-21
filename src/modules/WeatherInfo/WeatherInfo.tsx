import { useState } from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import UnitCheckboxes from "../../components/UnitCheckboxes/UnitCheckboxes";
import ArrowsButtons from "../../components/ArrowsButtons/ArrowsButtons";
import WeatherForecastItem from "../../components/WeatherForecastItem/WeatherForecastItem";

import { useWeather, WeatherItem } from "src/queries/";

const WeatherInfo = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const onChangeUnit = () => {
    if (unit === "metric") setUnit("imperial");
    else setUnit("metric");
  };

  const { data } = useWeather(unit);

  // We need to filter the data because the OpenWeather API
  // returns an unfiltered array.
  // We're filtering the array by day here to show it in the cards.
  const filteredData = data.list.filter((day: WeatherItem) => {
    return day.dt_txt.endsWith("15:00:00")
  })

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
      <UnitCheckboxes
        unit={unit}
        onChangeUnit={onChangeUnit}
      />

      <ArrowsButtons
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <Box ref={sliderRef} className="keen-slider">
        {filteredData.map((item: WeatherItem, index: number) => <WeatherForecastItem key={item.dt} data={item} slideNumber={index} unit={unit} />)}
      </Box>
    </Grid>
  );
}

export default WeatherInfo;
