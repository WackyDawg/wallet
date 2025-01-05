import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aliennode.app',
  appName: 'MiniPay',
  webDir: 'dist/wallet/browser',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 0,
      showSpinner: true
    },
    CapacitorLottieSplashScreen: {
      Enabled: true,
      LottieAnimationLocation: "public/assets/lottie/onboarding_part_1.json"
    }
  },
  // cordova: {
  //   preferences: {
  //     "LottieFullScreen": "true",
  //     "LottieHideAfterAnimationEnd": "true",
  //     "LottieAnimationLocation": "public/assets/lottie/onboarding_part_1.json",
  //   },
  // },
};

export default config;
