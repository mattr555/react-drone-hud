interface Props {
    pitch: number;
    roll: number;
    height?: number;
    width?: number;
}
declare const DroneHud: ({ pitch, roll, height, width }: Props) => JSX.Element;
export default DroneHud;
