import { useState, useEffect } from "react";
import { format } from "date-fns";

import { WeatherResult, WeatherItem } from "src/queries/";

type FilteredList = Array<{
  hour: string;
  temp: number;
}>;

const useChartList = (data: WeatherResult) => {
  const [list, setList] = useState<Array<any>>([]);
  const [selectedItem, setSelectedItem] = useState<WeatherItem | null>(null);

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

  const onSelectItem = (item: WeatherItem) => {
    // if (selectedItem === null) setSelectedItem(item);
    // else setSelectedItem(null);
  };

  return {
    list,
    onSelectItem,
  };
};

export default useChartList;
