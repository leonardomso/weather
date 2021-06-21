import React from 'react';
import { Grid, Checkbox } from "@chakra-ui/react";

const TemperatureButtons = () => {
  return (
    <Grid width="100%" maxW="400px" height="60px" templateColumns="1fr 1fr" gap={5} justifySelf="center" alignItems="center" justifyItems="center">
      <Checkbox size="lg">
        Celsius
      </Checkbox>

      <Checkbox size="lg">
        Fahrenheit
      </Checkbox>
    </Grid>
  );
}

export default TemperatureButtons;
