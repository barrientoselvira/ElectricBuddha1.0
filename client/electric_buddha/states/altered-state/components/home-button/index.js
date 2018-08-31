import React from "react";
import {
    VrButton,
    View,
} from "react-360";
import { BaseButton } from "../../../../components/base-button";
import { usingAppContext } from "../../../../providers";
import states from "../../../normal-state/components/states";
import { states } from "./style";

export default usingAppContext (({ selectedWave, waveClicked}) => {
    return (
        <View style={style.view}>
        <BaseButton
            selectedWave={selectedWave}
            buttonClick={() => {
                waveClicked(5);
            }}
            text={states[5].text}
            textStyle={style.text}
        />
        </View>
    )
});

