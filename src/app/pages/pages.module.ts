import { NgModule } from '@angular/core';

// Rutas

import { PAGES_ROUTES } from '../pages/pages.routes';

import { ChartsModule } from 'ng2-charts';



import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
    ],
    exports: [
       PagesComponent,
       DashboardComponent,
       ProgressComponent,
       Graficas1Component,
       IncrementorComponent,
       ChartsModule
    ],
    imports : [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        
    ],
    providers: [],
})
export class PagesModule {

}
