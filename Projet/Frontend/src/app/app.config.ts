import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { KeycloakService } from './Services/keycloak.service';
import { keycloakHttpInterceptor } from './Services/keycloak-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(() => 
      { const initFn = ((key: KeycloakService) => { return () => key.init()})
      (inject(KeycloakService));
      return initFn();}), 
    provideHttpClient(withInterceptors([keycloakHttpInterceptor])),
    provideClientHydration(withEventReplay())]
};
