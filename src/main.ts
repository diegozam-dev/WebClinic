import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@fontsource/merriweather/700.css';
import '@fontsource-variable/open-sans';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
