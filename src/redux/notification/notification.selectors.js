import { createSelector } from 'reselect';

const getNotificationState = state => state.filter;

export const selectUserFilters = createSelector(
    [getNotificationState],
    (filters) => filters.currentFilters);