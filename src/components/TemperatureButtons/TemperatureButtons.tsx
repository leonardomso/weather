import React from 'react';
import { Grid, Checkbox } from "@chakra-ui/react";

type Props = {
  temperature: string;
  onChangeTemperature: () => void;
}

const TemperatureButtons = ({ temperature, onChangeTemperature }: Props) => {
  return (
    <Grid width="100%" maxW="400px" height="60px" templateColumns="1fr 1fr" gap={5} justifySelf="center" alignItems="center" justifyItems="center">
      <Checkbox size="lg" isChecked={temperature === "metric"} onChange={onChangeTemperature}>
        Celsius
      </Checkbox>

      <Checkbox size="lg" isChecked={temperature === "imperial"} onChange={onChangeTemperature}>
        Fahrenheit
      </Checkbox>
    </Grid>
  );
}

export default TemperatureButtons;
