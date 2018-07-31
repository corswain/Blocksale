import { ANIMATION_TYPES, LoadingModule } from 'ngx-loading';
import { AlertDialogComponent } from 'shared/components';

import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,

    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.288)',
      backdropBorderRadius: '0px',
      primaryColour: '#0d47a1',
      secondaryColour: '#1565c0',
      tertiaryColour: '#1976d2'
    })
  ],
  exports: [AlertDialogComponent, MatDialogModule, LoadingModule],
  declarations: [AlertDialogComponent],
  entryComponents: [AlertDialogComponent]
})
export class SharedModule {}
