import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { CharactersComponent } from './home/characters/characters.component';
import { DetalleComponent } from './home/detalle/detalle.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/about', component: AboutComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'home/characters', component: CharactersComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'home/detalle', component: DetalleComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
