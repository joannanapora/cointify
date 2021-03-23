import { NotificationActionTypes } from './notification.types';


export const setCurrentNotification = (notification) => ({
    type: NotificationActionTypes.SET_CURRENT_NOTIFICATION,
    payload: notification
});