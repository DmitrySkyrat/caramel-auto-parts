import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ConfigState } from "./config.state";

export const selectConfigState = createFeatureSelector<AppState, ConfigState>('config');

export const selectisOpenNavBar = createSelector(selectConfigState, (state: ConfigState) => state.isOpenNavBar);
