import React from 'react';
import { Grid, Icon, Heading, Text } from "@chakra-ui/react";
import { BsBrightnessLowFill, BsDropletFill } from "react-icons/bs";

type Props = {
  slideNumber: number;
}

const WeatherForecastItem = ({ slideNumber }: Props) => {
  return (
    <Grid className={`keen-slider__slide number-slide${slideNumber}`} width="100%" maxW="180px" height="fit-content" templateRows="repeat(4, max-content)" gap={5} p={5} borderWidth="1px" borderRadius="5px" alignItems="center" justifyItems="center">
      <Heading fontSize="20px" isTruncated>Today</Heading>

      <Heading fontSize="30px" isTruncated>25°C</Heading>

      <Icon as={BsBrightnessLowFill} width="70px" height="70px" color="#ffba08" />

      <Grid width="fit-content" templateColumns="max-content 1fr" gap={2} alignItems="center" justifyItems="center">
        <Icon as={BsDropletFill} width="16px" height="16px" color="#4cc9f0" />
        <Text size="sm" isTruncated>2%</Text>
      </Grid>
    </Grid >
  );
}

export default WeatherForecastItem;
