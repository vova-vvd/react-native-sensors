declare module "react-native-sensors" {
  import { Observable } from "rxjs";

  type Sensors = {
    accelerometer: "accelerometer";
    gyroscope: "gyroscope";
    magnetometer: "magnetometer";
    barometer: "barometer";
    light: "light";
    proximity: "proximity";
    temperature: "temperature";
    orientation: "orientation";
    gravity: "gravity";
  };

  export const SensorTypes: Sensors;

  export const setUpdateIntervalForType: (type: keyof Sensors, updateInterval: number) => void;

  export const setLogLevelForType: (type: keyof Sensors, logLevel: 0 | 1 | 2) => void;

  export interface SensorData {
    x: number;
    y: number;
    z: number;
    timestamp: number;
  }

  export interface BarometerData {
    pressure: number;
    timestamp: number;
  }

  export interface LightData {
    light: number;
    timestamp: number;
  }

  export interface ProximityData {
    proximity: number;
    timestamp: number;
  }

  export interface TemperatureData {
    temperature: number;
    timestamp: number;
  }

  export interface OrientationData {
    qx: number;
    qy: number;
    qz: number;
    qw: number;
    pitch: number;
    roll: number;
    yaw: number;
    timestamp: number;
  }

  type SensorsBase = {
    accelerometer: Observable<SensorData>;
    gyroscope: Observable<SensorData>;
    magnetometer: Observable<SensorData>;
    barometer: Observable<BarometerData>;
    light: Observable<LightData>;
    proximity: Observable<ProximityData>;
    temperature: Observable<TemperatureData>;
    orientation: Observable<OrientationData>;
    gravity: Observable<SensorData>
  };

  export const { accelerometer, gyroscope, magnetometer, barometer, light, proximity, temperature, orientation, gravity }: SensorsBase;

  const sensors: SensorsBase;

  export default sensors;
}
