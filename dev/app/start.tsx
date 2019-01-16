import * as React from "react";
import { DroneHud } from "../../src";
import "./style.css";

declare const module: any;
let forceUpdate: any;

interface State {
    step: number;
}

export default class StartApp extends React.Component<{}, State> {
    state = {
        step: 0
    };

    public componentDidMount(): void {
        forceUpdate = this.forceUpdate();

        setInterval(() => this.setState({ step: this.state.step + 1 }), 32);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
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
                {/* <br />
                <DroneHud width={200} height={200} pitch={0} roll={0} />
                <br />
                <DroneHud width={400} height={200} pitch={5} roll={0} />
                <br />
                <DroneHud pitch={10} roll={0} /> */}
            </React.Fragment>
        );
    }
}

if (module.hot) {
    module.hot.accept("./../../src", function() {
        console.log("Accepting the updated module under src");
        forceUpdate();
    });
}
