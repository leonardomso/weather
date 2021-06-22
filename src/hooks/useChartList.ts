import { useState, useEffect } from "react";
import { format, isSameDay } from "date-fns";

import { WeatherResult, WeatherItem } from "src/queries/";

type FilteredList = Array<{
  hour: string;
  temp: number;
}>;

const useChartList = (data: WeatherResult) => {
  const [list, setList] = useState<Array<any>>([]);

  useEffect(() => {
    const filteredList: FilteredList = data.list.map((day: WeatherItem) => {
      const formattedDate: number = Date.parse(day.dt_txt);

      return {
        hour: `${format(formattedDate, "HH")}h`,
        temp: Math.round(day.main.temp),
      };
    });

    setList(filteredList);
  }, [data]);

  const onSelectDay = (item: WeatherItem) => {
    // Get current day.
    const currentDay: Date = new Date(item.dt_txt.split(" ")[0]);

    // Filter from array all days that are equal to current day.
    const days: Array<WeatherItem> = data.list.filter((item: WeatherItem) =>
      isSameDay(new Date(item.dt_txt.split(" ")[0]), currentDay),
    );

    // Filter the filtered days and return it in a way that we can show in the chart.
    const filteredDays: FilteredList = days.map((day: WeatherItem) => {
      const formattedDate: number = Date.parse(day.dt_txt);

      return {
        hour: `${format(formattedDate, "HH")}h`,
        temp: Math.round(day.main.temp),
      };
    });

    setList(filteredDays);
  };

  return {
    list,
    onSelectDay,
  };
};

export default useChartList;
