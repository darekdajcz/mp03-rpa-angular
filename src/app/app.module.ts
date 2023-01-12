import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { EntityModule } from './entities/entity.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { authInterceptorProviders, translateModuleConfig, translateServiceProvider } from './provider.config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule,
    EntityModule,
    MatButtonModule,
    MatDividerModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    MatMenuModule,
    HttpClientModule,
    TranslateModule.forRoot(translateModuleConfig)
  ],
  providers: [
    authInterceptorProviders, translateServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
