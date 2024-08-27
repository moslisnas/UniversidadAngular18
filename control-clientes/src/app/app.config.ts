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
} from '@angular/fire/compat/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';*/

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ClienteServicio } from './servicios/cliente.service';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //AngularFireAuthModule,
    provideAuth(() => getAuth()),
    //AngularFirestoreModule,
    provideFirestore(() => getFirestore()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AngularFirestore,
    ClienteServicio,
    //FlashMessagesModule.forRoot(),
    AlertMessagesService,
  ],
};
