﻿import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const TITLE_KEY = 'Flashcard:dbb'

const createNotification = () => {
    return {
        title: 'Hey There!',
        body: "👋 don't forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(TITLE_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(TITLE_KEY)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), { time: tomorrow, repeat: 'day' }
                            )
                            AsyncStorage.setItem(TITLE_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })
}