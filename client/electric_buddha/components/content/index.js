import React from "react";
import { View } from "react-360";
import { AlteredState, NormalState} from "../../states";
import { withAppContext } from "../../providers";

const AppContent = withAppContext (() => (
    <View>
        <AlteredState />
        <NormalState />
    </View>
));

export default AppContent;