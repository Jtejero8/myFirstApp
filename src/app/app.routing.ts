import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './componentes/home/home.component';
import { BodyComponent } from './componentes/body/body.component';
import { HeaderComponent } from './componentes/header/header.componet';

const appRoutes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'Body', component: BodyComponent},
{path: '**', component: HeaderComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

