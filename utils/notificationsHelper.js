import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashcards:notification';

/**
 * @description function to create local notification
 */
const createNotification = () => {
  return {
    title: 'Complete quiz',
    body: 'Please remember to complete at least one quiz today',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      stick: false,
      vibrate: true,
    },
  };
};

/**
 * @description function to handle and set local notification
 */
export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};

/**
 * @description function to clear scheduled notification
 */
export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};
