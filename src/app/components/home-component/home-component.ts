import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  constructor(private readonly http: HttpClient) {}

  triggerError(): void {
    this.http.get('/ruta-inexistente-para-probar-el-interceptor').subscribe();
  }
}
