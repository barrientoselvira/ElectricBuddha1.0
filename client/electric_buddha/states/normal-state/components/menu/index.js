import React from "react";
import { 
    hideIf, 
    usingAppContext
} from "../../../../providers";
import { compose } from "recompose";
import { View } from "react-360";
import style from "./style";

const hideMenu = hideIf(({ selectedWave }) => selectedWave !==5 );

export default compose(
    usingAppContext,
    hideMenu,
)(({ selectedWave, children }) => {
    return (
        <View style={style.view}>
            { children }
        </View>
    )
});