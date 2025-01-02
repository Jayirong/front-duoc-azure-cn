import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPublicaComponent } from './pagina-publica/pagina-publica.component';
import { PaginaPrivadaComponent } from './pagina-privada/pagina-privada.component';
import { MsalGuard } from './msal.guard';

const routes: Routes = [{path : 'pagina-publica', component: PaginaPublicaComponent},
{path: 'pagina-privada', component: PaginaPrivadaComponent, canActivate: [MsalGuard]},
{path: '**', component: PaginaPublicaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
