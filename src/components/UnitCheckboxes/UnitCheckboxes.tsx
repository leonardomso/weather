import React from "react";
import { Grid, Checkbox } from "@chakra-ui/react";

type Props = {
  unit: string;
  onChangeUnit: () => void;
};

const UnitCheckboxes = ({ unit, onChangeUnit }: Props) => {
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
      <Checkbox size="lg" isChecked={unit === "metric"} onChange={onChangeUnit}>
        Celsius
      </Checkbox>

      <Checkbox
        size="lg"
        isChecked={unit === "imperial"}
        onChange={onChangeUnit}
      >
        Fahrenheit
      </Checkbox>
    </Grid>
  );
};

export default UnitCheckboxes;
