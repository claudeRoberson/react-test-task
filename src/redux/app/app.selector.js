import { createSelector } from "reselect";

const rootSelector = state => state.app;

const selectChartData = createSelector(
  rootSelector,
  app => app.chartData
);
const selectChartPending = createSelector(
  rootSelector,
  app => app.pending
);

const appSelector = {
  selectChartData,
  selectChartPending
};

export default appSelector;
