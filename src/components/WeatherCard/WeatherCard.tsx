import React from "react";
import { Grid, Image, Heading } from "@chakra-ui/react";
import { format } from "date-fns";

import { WeatherItem } from "src/queries/";

type Props = {
  unit: "metric" | "imperial";
  data: WeatherItem;
  slideNumber: number;
};

const WeatherCard = ({ unit, data, slideNumber }: Props) => {
  const formatDate = Date.parse(data.dt_txt);
  const formatTemperature = () => (unit === "metric" ? "°C" : "°F");

  return (
    <Grid
      className={`keen-slider__slide number-slide${slideNumber}`}
      width="100%"
      maxW="fit-content"
      height="fit-content"
      templateRows="repeat(3, max-content)"
      gap={5}
      p={5}
      borderWidth="1px"
      borderRadius="5px"
      alignItems="center"
      justifyItems="center"
    >
      <Heading fontSize="20px" isTruncated>
        {format(formatDate, "ii, EE")}
      </Heading>

      <Heading fontSize="30px" isTruncated>{`${Math.round(
        data.main.temp,
      )}${formatTemperature()}`}</Heading>

      <Image
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </Grid>
  );
};

export default WeatherCard;
