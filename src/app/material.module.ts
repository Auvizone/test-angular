import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule ({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        LayoutModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatDividerModule,
        MatTreeModule,
        MatExpansionModule,
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        LayoutModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatDividerModule,
        MatTreeModule,
        MatExpansionModule,
    ],
    declarations: [],
    providers: []
})

export class MaterialModule { }