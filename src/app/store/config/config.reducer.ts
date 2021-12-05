import { createReducer, on } from "@ngrx/store";
import { initialConfigState } from "./config.state";
import * as ConfigActions from './config.actions';

export const configReducer = createReducer(
    initialConfigState,
    on(ConfigActions.getConfig, (state) => {
        const isOpenNavBar = !state.isOpenNavBar;
        return { ...state, isOpenNavBar: isOpenNavBar }
    })
)