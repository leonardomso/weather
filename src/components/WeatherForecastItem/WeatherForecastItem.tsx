import React from 'react';
import { Grid, Icon, Text } from "@chakra-ui/react";
import { BsBrightnessHigh, BsCalendar } from "react-icons/bs";

interface Props {
  number: number;
}

const WeatherForecastItem = ({ number }: Props) => {
  return (
    <Grid className={`keen-slider__slide number-slide${number}`} width="100%" maxW="180px" height="150px" templateRows="max-content max-content max-content" gap={5} p={5} borderWidth="1px" borderRadius="5px">
      <Grid width="100%" templateColumns="max-content 1fr" gap={2} alignItems="center" justifyItems="start">
        < Icon as={BsBrightnessHigh} width="20px" height="20px" />
        <Text size="sm" isTruncated>25°C</Text>
      </Grid >

      <Grid width="100%" templateColumns="max-content 1fr" gap={2} alignItems="center" justifyItems="start">
        <Icon as={BsCalendar} width="20px" height="20px" />
        <Text size="sm" isTruncated>18 Jun, 2021</Text>
      </Grid>
    </Grid >
  );
}

export default WeatherForecastItem;
