if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/playground/sw.js', { scope: '/playground/' })})}