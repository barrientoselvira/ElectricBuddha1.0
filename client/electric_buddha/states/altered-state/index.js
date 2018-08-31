import React from "react";
import { View } from "react-360";
import { HomeButton } from "./components";

const AlteredState = () => (
    <View style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translate: [150, 0, -100]}],
        marginTop: 80,
    }}>
        <HomeButton />
    </View>
);

export default AlteredState;