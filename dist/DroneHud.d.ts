interface Props {
    pitch: number;
    roll: number;
    airspeed?: number;
    altitude?: number;
    heading?: number;
    height?: number;
    width?: number;
}
declare const DroneHud: ({ pitch, roll, airspeed, altitude, heading, height, width }: Props) => JSX.Element;
export default DroneHud;
