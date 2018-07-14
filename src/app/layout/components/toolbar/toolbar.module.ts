import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,

        TranslateModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule
    ],
    exports: [ToolbarComponent]
})
export class ToolbarModule {}
