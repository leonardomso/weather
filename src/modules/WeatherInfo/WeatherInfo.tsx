import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { ResponsiveBar } from "@nivo/bar";
import { format } from "date-fns";

import UnitCheckboxes from "../../components/UnitCheckboxes/UnitCheckboxes";
import ArrowsButtons from "../../components/ArrowsButtons/ArrowsButtons";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

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
    return day.dt_txt.endsWith("15:00:00");
  });

  const tempData: Array<{
    temp: string;
  }> = data.list.map((day: WeatherItem) => {
    const formattedDate: number = Date.parse(day.dt_txt);

    return {
      hour: `${format(formattedDate, "HH")}h`,
      temp: Math.round(day.main.temp),
    };
  });

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

  return (
    <Grid
      templateRows="max-content max-content max-content"
      gap={2}
      width="100%"
      height="100vh"
      maxW="600px"
      margin="0 auto"
    >
      <UnitCheckboxes unit={unit} onChangeUnit={onChangeUnit} />

      <ArrowsButtons
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <Box ref={sliderRef} className="keen-slider">
        {filteredData.map((item: WeatherItem, index: number) => (
          <WeatherCard
            key={item.dt}
            data={item}
            slideNumber={index}
            unit={unit}
          />
        ))}
      </Box>

      <Box>
        <ResponsiveBar
          data={tempData}
          keys={["temp"]}
          indexBy="hour"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.4}
          valueScale={{ type: "linear" }}
          colors="#3182CE"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "hour",
            legendPosition: "middle",
            legendOffset: 45,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "temperature",
            legendPosition: "middle",
            legendOffset: -40,
          }}
        />
      </Box>
    </Grid>
  );
};

export default WeatherInfo;
