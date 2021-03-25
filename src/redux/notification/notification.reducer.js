import { NotificationActionTypes } from './notification.types';


const INITIAL_STATE = {
    currentNotification: []
}
const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NotificationActionTypes.SET_USER_NOTIFICATION:
            return {
                ...state,
                currentNotification: { ...state.currentFilters, ...action.payload }
            }
        default:
            return state;
    }
}

export default notificationReducer;