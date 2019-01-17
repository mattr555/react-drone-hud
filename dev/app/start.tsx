import * as React from "react";
import DroneHud from "../../src";

declare const module: any;
let forceUpdate: any;

interface State {
    step: number;
}

class MovingDemo extends React.Component<{}, State> {
    state = {
        step: 0
    };

    public componentDidMount(): void {
        setInterval(() => this.setState({ step: this.state.step + 1 }), 32);
    }

    public render(): JSX.Element {
        return (
            <DroneHud
                pitch={Math.sin(this.state.step / 40) * 20}
                // pitch={69}
                roll={Math.sin(this.state.step / 100) * 30}
                // roll={420}
                airspeed={Math.sin(this.state.step / 50) * 100 + 100}
                altitude={Math.sin(this.state.step / 50) * 100 + 100}
                heading={this.state.step % 360}
                width={800}
                height={400}
                // height={window.innerHeight}
            />
        );
    }
}

export default class StartApp extends React.Component<{}, State> {
    public componentDidMount(): void {
        forceUpdate = this.forceUpdate();

        setInterval(() => this.setState({ step: this.state.step + 1 }), 32);
    }

    public render(): JSX.Element {
        return (
            <div className="page">
                <h1>react-drone-hud</h1>
                <MovingDemo />

                <hr />
                <pre>
                    {
                        "<DroneHud width={600} height={400} pitch={10} roll={-10}  />"
                    }
                </pre>
                <DroneHud pitch={10} roll={-10} width={600} height={400} />

                <hr />
                <pre>
                    {
                        "<DroneHud width={600} height={400} heading={120} pitch={0} roll={0} />"
                    }
                </pre>
                <DroneHud
                    width={600}
                    height={400}
                    heading={120}
                    pitch={0}
                    roll={0}
                />

                <hr />
                <pre>
                    {
                        "<DroneHud width={600} height={400} heading={120} pitch={0} roll={0} airspeed={20} airspeedTickSize={2} altitude={210} altitudeTickSize={20} />"
                    }
                </pre>
                <DroneHud
                    width={600}
                    height={400}
                    heading={120}
                    pitch={0}
                    roll={0}
                    airspeed={20}
                    airspeedTickSize={2}
                    altitude={210}
                    altitudeTickSize={20}
                />
                {/* <br />
                <DroneHud width={200} height={200} pitch={0} roll={0} />
                <br />
                <DroneHud width={400} height={200} pitch={5} roll={0} />
                <br />
                <DroneHud pitch={10} roll={0} /> */}
            </div>
        );
    }
}

if (module.hot) {
    module.hot.accept("./../../src", function() {
        console.log("Accepting the updated module under src");
        forceUpdate();
    });
}
