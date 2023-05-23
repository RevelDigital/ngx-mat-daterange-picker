import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpComponent } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { PresetsComponent } from './presets/presets.component';
import { DATE } from './services/range-store.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        OverlayModule
    ],
    declarations: [
        NgxMatDrpComponent,
        CalendarWrapperComponent,
        PickerOverlayComponent,
        PresetsComponent
    ],
    providers: [
        { provide: DATE, useValue: new Date() }
    ],
    exports: [NgxMatDrpComponent]
})
export class NgxMatDrpModule { }
