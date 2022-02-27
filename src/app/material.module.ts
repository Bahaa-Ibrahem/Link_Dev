import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    imports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        CarouselModule
    ],
    exports: [
        MatSliderModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        CarouselModule
    ]
})
export class MaterialModule { }