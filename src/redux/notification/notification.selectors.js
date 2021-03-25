import { createSelector } from 'reselect';

const getNotificationState = state => state.notification;

export const selectUserNotification = createSelector(
    [getNotificationState],
    (notification) => notification.currentNotification);