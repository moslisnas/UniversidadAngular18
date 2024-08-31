import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
/*import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFirestoreModule,
  Settings,
} from '@angular/fire/compat/firestore';*/
// Obsolete firestore configuration
//import { FlashMessagesModule } from 'angular2-flash-messages';
// Obsolete flash_messages configuration

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ClienteServicio } from './servicios/cliente.service';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionServicio } from './servicios/configuracion.service';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //AngularFireModule.initializeApp(environment.firestore, 'control-clientes'), // Obsolete firestore configuration
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //AngularFireAuthModule, // Obsolete firestore configuration
    provideAuth(() => getAuth()),
    //AngularFirestoreModule, // Obsolete firestore configuration
    provideFirestore(() => getFirestore()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AngularFirestore,
    //FlashMessagesModule.forRoot(), // Obsolete flash_messages configuration
    AlertMessagesService,
    ClienteServicio,
    LoginService,
    AuthGuard,
    ConfiguracionServicio,
    //{ provide: FirestoreSettingsToken, useValue: {} }, // Obsolete firestore configuration
    ConfiguracionGuard,
  ],
};
