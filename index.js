import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType, setLogLevelForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  light: "light",
  proximity: "proximity",
  temperature: "temperature",
  orientation: "orientation",
  gravity: "gravity"
};

export const { accelerometer, gyroscope, magnetometer, barometer, light, proximity, temperature, orientation, gravity } = sensors;
export default sensors;
