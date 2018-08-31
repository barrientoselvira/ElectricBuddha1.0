import React from "react";
import StateButton from "../state-button";
import { usingAppContext } from "../../../../providers";
import { Waves } from "../../../../data";
import { View } from "react-360";

export default compose (
    usingAppContext 
)(({ waveClicked }) => {
    return (
        <View>
        {
            Waves.map((waves) => (
                <StateButton 
                    selectedWaves = {waves.id}
                    key={waves.id}
                    buttonClick={() => {
                        waveClicked(waves.id);
                    }}
                text={waves.text}
                />
            ))
        }
        </View>
    )
})