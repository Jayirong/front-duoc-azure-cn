import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-duoc-azure';

  constructor(private msalService: MsalService) {}

  usuarioEstaConectado(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  iniciarSesion(): void {
    this.msalService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);

        this.msalService.acquireTokenSilent({ scopes: [] }).subscribe({
          next: (tokenResponse) => {
            localStorage.setItem('jwt', tokenResponse.idToken);
          }
        });
      });
  }

  cerrarSesion(): void {
    this.msalService.logout();
  }
}
