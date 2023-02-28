import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.mediadesain.com',
  appName: 'Mediadesain',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      "androidScaleType": "CENTER_CROP",
      "splashFullScreen": true,
      "splashImmersive": false,
      "launchShowDuration": 3000,
      "showSpinner": true,
      "spinnerColor": "#666",
      "androidSpinnerStyle": "small",
      "iosSpinnerStyle": "small"
    }
  }
};

export default config;
