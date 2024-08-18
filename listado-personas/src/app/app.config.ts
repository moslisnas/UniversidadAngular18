import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { DataServices } from './data.services';
import { provideHttpClient } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    LoggingService,
    PersonasService,
    DataServices,
    LoginService,
    LoginGuardian,
  ],
};
