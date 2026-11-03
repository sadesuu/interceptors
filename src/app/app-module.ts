import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './error-interceptor';
import { ErrorComponent } from './components/error-component/error-component';
import { HomeComponent } from './components/home-component/home-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceEquipos } from './services/serviceEquipos';

@NgModule({
  declarations: [App, ErrorComponent, HomeComponent, EquipoComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    ServiceEquipos
  ],
  bootstrap: [App],
})
export class AppModule {}
