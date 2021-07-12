import React from "react";
import { Grid, Image, Heading } from "@chakra-ui/react";
import { format } from "date-fns";

import { WeatherItem } from "src/queries/";

import convertTemperature from "src/utils/convertTemperature";

type Props = {
  unit: "metric" | "imperial";
  item: WeatherItem;
  slideNumber: number;
  onSelectDay: (item: WeatherItem) => void;
};

const WeatherCard = ({ unit, item, slideNumber, onSelectDay }: Props) => {
  const formatDate = Date.parse(item.dt_txt);
  const formatTemperature = unit === "metric" ? "°C" : "°F";

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
      cursor="pointer"
      _hover={{
        background: "gray.50",
      }}
      _focus={{
        background: "gray.50",
      }}
      _active={{
        background: "gray.50",
      }}
      onClick={() => onSelectDay(item)}
    >
      <Heading fontSize="20px" isTruncated>
        {format(formatDate, "ii, EE")}
      </Heading>

      <Heading fontSize="30px" isTruncated>{`${convertTemperature(
        unit,
        item.main.temp,
      )}${formatTemperature}`}</Heading>

      <Image
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </Grid>
  );
};

export default WeatherCard;
