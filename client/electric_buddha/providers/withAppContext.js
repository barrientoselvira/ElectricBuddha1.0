import { withContext, compose } from "recompose";
import * as PropTypes from "prop-types";
import withStateAndHandlers from "./withStateAndHandlers";

export const AppPropTypes = {
    selectedWave: PropTypes.number,
    waveClicked: PropTypes.func,
}

const AppContext = withContext(
    AppPropTypes,
    ({ selectedWave, waveClicked }) => ({
        selectedWave,
        waveClicked
    })
);

export default compose(
    withStateAndHandlers,
    AppContext,
);