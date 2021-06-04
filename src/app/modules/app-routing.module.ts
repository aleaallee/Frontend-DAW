import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { ComponentesComponent } from '@components/componentes/componentes.component';
import { RegLoginComponent } from '@components/reg-login/reg-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'componentes',
    component: ComponentesComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuenta',
    component: RegLoginComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
