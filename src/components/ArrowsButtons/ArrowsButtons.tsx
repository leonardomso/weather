import React from 'react';
import { Grid, IconButton } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Props {
  previousSlide: (e: any) => void;
  nextSlide: (e: any) => void;
  isFirst: boolean;
  isLast: boolean;
}

const ArrowsButtons = ({ previousSlide, nextSlide, isFirst, isLast }: Props) => {
  return (
    <Grid width="100%" maxW="400px" height="60px" templateColumns="1fr 1fr" gap={5} justifySelf="center" alignItems="center" justifyItems="center">
      <IconButton
        aria-label="Self"
        fontSize="20px"
        size="lg"
        icon={<BsArrowLeft />}
        isDisabled={isFirst}
        onClick={previousSlide}
      />

      <IconButton
        aria-label="Right"
        fontSize="20px"
        size="lg"
        icon={<BsArrowRight />}
        onClick={nextSlide}
        isDisabled={isLast}
      />
    </Grid>
  );
}

export default ArrowsButtons;
