import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MatGridListModule, MatCardModule, MatExpansionModule, MatListModule, MatButtonModule],
  exports: [CommonModule, MatGridListModule, MatCardModule, MatExpansionModule, MatListModule, MatButtonModule]
})
export class NgxTinynodesCoreMaterialModule {}
