import React from "react";
import hideIf from "./hideIf";

const hideIfHome = hideIf((props) => props.selectedWave === 6);

export default hideIfHome;