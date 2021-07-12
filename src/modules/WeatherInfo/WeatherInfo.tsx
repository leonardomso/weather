import { Box, Grid, Button } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";

import UnitCheckboxes from "src/components/UnitCheckboxes/UnitCheckboxes";
import ArrowsButtons from "src/components/ArrowsButtons/ArrowsButtons";
import WeatherCard from "src/components/WeatherCard/WeatherCard";

import { useWeather, WeatherItem } from "src/queries/";

import useUnit from "src/hooks/useUnit";
import useChartList from "src/hooks/useChartList";
import useSlide from "src/hooks/useSlide";

const WeatherInfo = () => {
  const { unit, changeUnit } = useUnit();
  const { data, refetch } = useWeather(unit);
  const { list, onSelectDay } = useChartList(data);
  const { sliderRef, previousSlide, nextSlide, isFirst, isLast } = useSlide();

  // We need to filter the data because the OpenWeather API
  // returns an unfiltered array.
  // We're filtering the array by day here to show it in the cards.
  const filteredData: Array<WeatherItem> = data.list.filter(
    (day: WeatherItem) => {
      return day.dt_txt.endsWith("15:00:00");
    },
  );

  return (
    <Grid
      templateRows="max-content max-content max-content max-content"
      gap={2}
      width="100%"
      height="100vh"
      maxW="600px"
      margin="0 auto"
    >
      <Button type="button" onClick={() => refetch()}>
        Refresh
      </Button>

      <UnitCheckboxes unit={unit} changeUnit={changeUnit} />

      <ArrowsButtons
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <Box width="100%" maxW="600px" ref={sliderRef} className="keen-slider">
        {filteredData.map((item: WeatherItem, index: number) => (
          <WeatherCard
            key={item.dt}
            item={item}
            slideNumber={index}
            unit={unit}
            onSelectDay={onSelectDay}
          />
        ))}
      </Box>

      <Box width="100%" maxW="600px">
        <ResponsiveBar
          data={list}
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
