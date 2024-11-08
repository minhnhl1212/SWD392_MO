import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export function firebaseMessaging() {
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization Messaging status:', authStatus);
        }
    }

    useEffect(() => {
        if (requestUserPermission()) {
            messaging().getToken().then((token) => {
                console.log("Messaging token:", token);
            });
        } else {
            console.log("Permission not granted", authStatus);
        }

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(async (remoteMessage) => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                }
            });

        // Assume a message-notification contains a "type" property in the data payload of the screen to open
        messaging().onNotificationOpenedApp(async (remoteMessage) => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });

        // Register background handler
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log('Message handled in the background!', remoteMessage);
        });

        messaging().onMessage(async (remoteMessage) => {
            Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
        });
    }, []);
}