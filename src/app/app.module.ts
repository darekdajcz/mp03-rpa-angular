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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { authInterceptorProviders, translateModuleConfig, translateServiceProvider } from './provider.config';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessagesHandlerInterceptor } from './blocks/messages-handler.interceptor';

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
    NgxSpinnerModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTooltipModule,
    TranslateModule.forRoot(translateModuleConfig)
  ],
  providers: [
    authInterceptorProviders,
    translateServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MessagesHandlerInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
