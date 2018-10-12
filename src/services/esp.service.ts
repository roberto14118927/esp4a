import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class EspService {
    constructor(public afDB: AngularFireDatabase) {

    }
    public ledOn() {
        return this.afDB.database.ref().child('LED_STATUS').set(1);
    }

    public ledOff() {
        return this.afDB.database.ref().child('LED_STATUS').set(0);
    }
}
