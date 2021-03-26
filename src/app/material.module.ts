import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const modules = [MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [
    modules
  ],
  exports: [modules]
})
export class MaterialModule { }
