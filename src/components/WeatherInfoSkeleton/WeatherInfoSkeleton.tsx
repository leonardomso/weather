import React from "react";
import { Grid, Skeleton } from "@chakra-ui/react";

const WeatherInfoSkeleton = () => {
  return (
    <Grid
      templateRows="max-content max-content max-content"
      gap={2}
      width="100%"
      height="100vh"
      maxW="600px"
      margin="0 auto"
    >
      <Grid
        width="100%"
        maxW="600px"
        height="60px"
        templateColumns="1fr 1fr"
        gap={5}
        justifySelf="center"
        alignItems="center"
        justifyItems="center"
      >
        <Skeleton width="160px" height="35px" />

        <Skeleton width="160px" height="35px" />
      </Grid>

      <Grid
        width="100%"
        maxW="600px"
        height="60px"
        templateColumns="1fr 1fr"
        gap={5}
        justifySelf="center"
        alignItems="center"
        justifyItems="center"
      >
        <Skeleton width="60px" height="45px" />

        <Skeleton width="60px" height="45px" />
      </Grid>

      <Grid
        width="100%"
        maxW="600px"
        templateColumns="repeat(3, 180px)"
        gap={3}
      >
        <Grid
          width="100%"
          maxW="fit-content"
          height="240px"
          templateRows="repeat(3, max-content)"
          gap={5}
          p={5}
          borderWidth="1px"
          borderRadius="5px"
          alignItems="center"
          justifyItems="center"
        >
          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="80px" />
        </Grid>

        <Grid
          width="100%"
          maxW="fit-content"
          height="240px"
          templateRows="repeat(3, max-content)"
          gap={5}
          p={5}
          borderWidth="1px"
          borderRadius="5px"
          alignItems="center"
          justifyItems="center"
        >
          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="80px" />
        </Grid>

        <Grid
          width="100%"
          maxW="fit-content"
          height="240px"
          templateRows="repeat(3, max-content)"
          gap={5}
          p={5}
          borderWidth="1px"
          borderRadius="5px"
          alignItems="center"
          justifyItems="center"
        >
          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="35px" />

          <Skeleton width="140px" height="80px" />
        </Grid>
      </Grid>

      <Grid
        width="100%"
        maxW="fit-content"
        height="250px"
        templateColumns="repeat(12, 1fr)"
        gap={5}
        alignItems="end"
        justifyItems="center"
        justifySelf="center"
      >
        <Skeleton width="20px" height="80%" />
        <Skeleton width="20px" height="65%" />
        <Skeleton width="20px" height="22%" />
        <Skeleton width="20px" height="41%" />
        <Skeleton width="20px" height="56%" />
        <Skeleton width="20px" height="37%" />
        <Skeleton width="20px" height="60%" />
        <Skeleton width="20px" height="12%" />
        <Skeleton width="20px" height="34%" />
        <Skeleton width="20px" height="43%" />
        <Skeleton width="20px" height="89%" />
        <Skeleton width="20px" height="21%" />
      </Grid>
    </Grid>
  );
};

export default WeatherInfoSkeleton;
