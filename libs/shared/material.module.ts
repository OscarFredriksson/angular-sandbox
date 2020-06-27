import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatInputModule,
        MatGridListModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        MatInputModule,
        MatGridListModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ]
})
export class MaterialModule { }