importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCyyzO2trIWsVlHGYzSxu2a_ymqSLUX2FM",
    projectId: "notif-agen",
    messagingSenderId: "838409690043",
    appId: "1:838409690043:web:d9e136c9ecc7388172c29e",
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function ({
    data: { title, body, icon },
}) {
    return self.registration.showNotification(title, { body, icon });
});
