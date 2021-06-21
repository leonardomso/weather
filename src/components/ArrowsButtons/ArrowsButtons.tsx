import React from 'react';
import { Grid, IconButton } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ArrowsButtons = () => {
  return (
    <Grid width="100%" maxW="400px" height="60px" templateColumns="1fr 1fr" gap={5} justifySelf="center" alignItems="center" justifyItems="center">
      <IconButton
        aria-label="Self"
        fontSize="20px"
        size="lg"
        icon={<BsArrowLeft />}
      />

      <IconButton
        aria-label="Right"
        fontSize="20px"
        size="lg"
        icon={<BsArrowRight />}
      />
    </Grid>
  );
}

export default ArrowsButtons;
