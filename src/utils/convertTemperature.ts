const convertTemperature = (unit: string, temperature: number) => {
  if (unit === "imperial") {
    const newTemperatureInFarenheit: number = temperature * (9 / 5) + 32;
    const finalTemperatureInFarenheit = Math.round(newTemperatureInFarenheit);
    return finalTemperatureInFarenheit;
  }
  return Math.round(temperature);
};

export default convertTemperature;
