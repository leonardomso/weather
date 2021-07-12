const convertTemperature = (unit: string, temperature: number): number => {
  let finalTemperature = 0;
  if (unit === "imperial") {
    const newTemperatureInFarenheit: number = temperature * (9 / 5) + 32;
    const finalTemperatureInFarenheit = Math.round(newTemperatureInFarenheit);
    finalTemperature = finalTemperatureInFarenheit;
  } else if (unit === "metric") {
    const newTemperatureInCelsius: number = (temperature - 32) * (5 / 9);
    const finalTemperatureInCelsius = Math.round(newTemperatureInCelsius);
    finalTemperature = finalTemperatureInCelsius;
  }
  return finalTemperature;
};

export default convertTemperature;
