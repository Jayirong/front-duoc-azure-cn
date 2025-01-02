import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { DefaultBackendService } from '../default-backend.service';

@Component({
  selector: 'app-pagina-privada',
  templateUrl: './pagina-privada.component.html',
  styleUrls: ['./pagina-privada.component.css']
})
export class PaginaPrivadaComponent implements OnInit {

  responseBackend: object;

  constructor(private authService: MsalService, private backendService: DefaultBackendService) { }

  ngOnInit(): void {
  }

  obtenerUsuario(): string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'error';
    }
    return this.authService.instance.getActiveAccount().name;
  }

  llamarBackend(): void {
    this.backendService.consumirBackend().subscribe(response => {
      this.responseBackend = response;
    });
  }

  mostrarResponseBackend(): string {
    return JSON.stringify(this.responseBackend);
  }
}
