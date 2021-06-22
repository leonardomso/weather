import React from "react";
import { Grid, Checkbox } from "@chakra-ui/react";

type Props = {
  unit: string;
  changeUnit: () => void;
};

const UnitCheckboxes = ({ unit, changeUnit }: Props) => {
  return (
    <Grid
      width="100%"
      maxW="400px"
      height="60px"
      templateColumns="1fr 1fr"
      gap={5}
      justifySelf="center"
      alignItems="center"
      justifyItems="center"
    >
      <Checkbox size="lg" isChecked={unit === "metric"} onChange={changeUnit}>
        Celsius
      </Checkbox>

      <Checkbox size="lg" isChecked={unit === "imperial"} onChange={changeUnit}>
        Fahrenheit
      </Checkbox>
    </Grid>
  );
};

export default UnitCheckboxes;
