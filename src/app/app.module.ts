import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPublicaComponent } from './pagina-publica/pagina-publica.component';
import { PaginaPrivadaComponent } from './pagina-privada/pagina-privada.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';

export function MSALFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'a8838fdd-dd11-410d-881a-5c216bc42362',
      redirectUri: 'http://localhost:4200'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    PaginaPublicaComponent,
    PaginaPrivadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALFactory
    },
    MsalService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
