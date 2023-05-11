import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * This internal module loads the required demos for Angular Material
 */
@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule]
})
export class MaterialModule {}
