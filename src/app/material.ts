import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

import { NgModule } from '@angular/core';

// @NgModule Es para crear un modulo de angular y hay que importar angular/core
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatRadioModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatRadioModule],
})
export class MaterialModule { }