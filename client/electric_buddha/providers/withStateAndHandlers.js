import React from "react";
import {
    withState, 
    withHandlers,
    compose
} from "recompose";
import {
    Environment, 
    asset, 
    NativeModules
} from "react-360";
import { Waves } from "../data";
const { AudioModule } = NativeModules;

const withStateAndHandlers = compose(
    withState("selectedWave", "waveClicked", 6),
    withHandlers({
        waveClicked: (props) => (id, Environment) => {
            Environment.setBackgroundImage(asset(Waves [id -1].image))
            if (Waves[id - 1].audio !== null && Waves[id -1].audio !== undefined) {
                AudioModule.playEnvironmental({
                    source: asset(Waves[id - 1].audio),
                    volume: 0.3,
                });
            } else {
                AudioModule.stopEnvironmental();
            }
            props.waveClicked(selectedWave => id);
        }
    }),
)

export default withStateAndHandlers;