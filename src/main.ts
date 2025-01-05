import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CapacitorLottieSplashScreen } from '@morphood/capacitor-lottie-splash-screen';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  CapacitorLottieSplashScreen.appLoaded(); // Notify the splash screen
})
  .catch(err => console.error(err));
