import React from 'react';
import { Grid } from "@chakra-ui/react";

import TemperatureButtons from "../../components/TemperatureButtons/TemperatureButtons";
import ArrowsButtons from "../../components/ArrowsButtons/ArrowsButtons";
import WeatherForecastItem from "../../components/WeatherForecastItem/WeatherForecastItem";

import { useWeather } from "src/queries/";

const WeatherInfo = () => {
  const { data } = useWeather();
  console.log('data: ', data);

  return (
    <Grid templateRows="max-content max-content max-content" gap={5} width="100%" height="100vh" maxW="600px" margin="0 auto">
      <TemperatureButtons />
      <ArrowsButtons />
      <WeatherForecastItem />
    </Grid>
  );
}

export default WeatherInfo;
