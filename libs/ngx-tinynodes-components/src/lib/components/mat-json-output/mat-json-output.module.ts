import { NgModule } from '@angular/core';
import { NgxTinynodesMatJsonOutputComponent } from './mat-json-output.component';
import { CommonModule } from '@angular/common';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, NgxJsonViewerModule],
  declarations: [NgxTinynodesMatJsonOutputComponent],
  exports: [NgxTinynodesMatJsonOutputComponent],
})
export class NgxTinynodesMatJsonOutputModule {}
