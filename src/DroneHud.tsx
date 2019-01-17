import * as React from "react";
const pitchRing = require("./svg/pitch-ring.svg") as string;
const planeIndicator = require("./svg/plane-indicator.svg") as string;
const horizon = require("./svg/horizon-bg.svg") as string;
const horizonTicks = require("./svg/horizon-ticks.svg") as string;
const verticalGauge = require("./svg/vertical-gauge.svg") as string;
const headingBar = require("./svg/heading-bar.svg") as string;
const styles = require("./DroneHud.module.css");

const VerticalTicks = ({
    n,
    right = false,
    tickSize = 10
}: {
    n: number;
    right?: boolean;
    tickSize?: number;
}) => {
    const closestTick = Math.round(n / tickSize) * tickSize;
    const ticks = [
        <div
            className={right ? styles.verticalTickRight : styles.verticalTick}
            style={{ marginTop: 4 * (10 / tickSize) * (n - closestTick) + 10 }}
        >
            {closestTick + 2 * tickSize}
        </div>
    ];
    for (
        let i = closestTick + tickSize;
        i >= closestTick - 2 * tickSize;
        i -= tickSize
    ) {
        ticks.push(
            <div
                className={
                    right ? styles.verticalTickRight : styles.verticalTick
                }
            >
                {i}
            </div>
        );
    }

    return (
        <div
            className={
                right
                    ? styles.verticalTickContainerRight
                    : styles.verticalTickContainer
            }
        >
            {ticks}
        </div>
    );
};

interface Props {
    pitch: number;
    roll: number;
    airspeed?: number;
    airspeedTickSize?: number;
    altitude?: number;
    altitudeTickSize?: number;
    heading?: number;
    height?: number;
    width?: number;
}

const headingLeft = (n: number): number => {
    n %= 360;
    if (n >= 0 && n < 210) {
        return -160 - 2 * n;
    }
    return -160 + 2 * (360 - n);
};

const DroneHud = ({
    pitch,
    roll,
    airspeed,
    airspeedTickSize = 5,
    altitude,
    altitudeTickSize = 10,
    heading,
    height = 400,
    width = 400
}: Props) => {
    const shouldDisplayAirspeed = typeof airspeed == "number";
    const shouldDisplayAltitude = typeof altitude == "number";
    const shouldDisplayHeading = typeof heading == "number";

    return (
        <div className={styles.container} style={{ height, width }}>
            <div
                className={styles.fullWrap}
                style={{
                    transform: `rotate(${-roll}deg)`,
                    marginTop: shouldDisplayHeading ? 20 : 0
                }}
            >
                <img
                    src={horizon}
                    className={styles.horizon}
                    style={{ top: `${pitch * 2 - 150}%` }}
                />
                <div className={styles.horizonHider}>
                    <div className={styles.horizonInner}>
                        <img
                            src={horizonTicks}
                            className={styles.horizon}
                            style={{
                                top: `${pitch * 2 - 150}%`,
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                <img className={styles.absolute} src={pitchRing} />
            </div>

            <img
                className={styles.fullWrap}
                src={planeIndicator}
                style={{ marginTop: shouldDisplayHeading ? 20 : 0 }}
            />

            {shouldDisplayAirspeed && (
                <React.Fragment>
                    <img src={verticalGauge} className={styles.verticalGauge} />
                    <div className={styles.airspeedIndication}>
                        {Math.round(airspeed)}
                    </div>
                    <VerticalTicks n={airspeed} tickSize={airspeedTickSize} />
                </React.Fragment>
            )}

            {shouldDisplayAltitude && (
                <React.Fragment>
                    <img
                        src={verticalGauge}
                        className={styles.verticalGaugeRight}
                    />
                    <div className={styles.altitudeIndication}>
                        {Math.round(altitude)}
                    </div>
                    <VerticalTicks
                        n={altitude}
                        right
                        tickSize={altitudeTickSize}
                    />
                </React.Fragment>
            )}

            {shouldDisplayHeading && (
                <div className={styles.headingBar}>
                    <img
                        src={headingBar}
                        className={styles.headingImg}
                        style={{ left: headingLeft(heading) }}
                    />
                    <div className={styles.headingIndication}>
                        {Math.round(heading)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DroneHud;
