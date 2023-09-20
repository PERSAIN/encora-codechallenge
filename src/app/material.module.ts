import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


const modules = [MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
