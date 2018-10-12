import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MaterialModule} from './material';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// import { EspService } from '../services/esp.service';
import {EspService} from '../services/esp.service';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';



const firebaseConfig: any = {
  apiKey: 'AIzaSyDroWRk6cLqCzGjY7V9fk6dodU4hJZcIWg',
  authDomain: 'esp4a-e1dcd.firebaseapp.com',
  databaseURL: 'https://esp4a-e1dcd.firebaseio.com',
  projectId: 'esp4a-e1dcd',
  storageBucket: 'esp4a-e1dcd.appspot.com',
  messagingSenderId: '633373425441'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})
export class AppModule { }
