import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { WeatherResult, WeatherItem } from "./types";

const useEpisodes = (units: string) => {
  const options: AxiosRequestConfig = {
    method: "get",
    url: `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}&cnt=40&units=${units}`,
  };

  return useQuery<WeatherResult, WeatherItem, any>(
    ["weather", units],
    async () => {
      const { data } = await axios(options);
      return data;
    },
    {
      retry: 10,
      enabled: Boolean(units),
      retryDelay: 1000,
      suspense: true,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    }
  );
};

export default useEpisodes;
