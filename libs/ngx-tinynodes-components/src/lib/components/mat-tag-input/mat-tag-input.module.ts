import { NgModule } from '@angular/core';
import { NgxTinynodesMatTagInputComponent } from './mat-tag-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [FormsModule, CommonModule, MatChipsModule, MatIconModule],
  declarations: [NgxTinynodesMatTagInputComponent],
  exports: [NgxTinynodesMatTagInputComponent],
})
export class NgxTinynodesMatTagInputModule {}
