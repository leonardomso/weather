import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import WeatherInfo from "src/modules/WeatherInfo/WeatherInfo";
import WeatherInfoSkeleton from "src/components/WeatherInfoSkeleton/WeatherInfoSkeleton";
import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<WeatherInfoSkeleton />}>
          <WeatherInfo />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default App;
