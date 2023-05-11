import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
  imports: [
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class NgxEditorJSDemoMaterialModule {}
