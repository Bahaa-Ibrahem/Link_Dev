import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule
    ],
    exports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule
    ]
})
export class MaterialModule { }