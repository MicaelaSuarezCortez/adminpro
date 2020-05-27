import { NgModule } from '@angular/core';

// Rutas

import { PAGES_ROUTES } from '../pages/pages.routes';


import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
       PagesComponent,
       DashboardComponent,
       ProgressComponent,
       Graficas1Component,
    ],
    imports : [
        SharedModule,
        PAGES_ROUTES
    ],
    providers: [],
})
export class PagesModule { }