import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './blocks/auth.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';

// Interceptor config
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

// Translate config
function translatePartialLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): any {
    `translation-not-found[${ params }]`;
  }
}

export const translateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: translatePartialLoader,
    deps: [HttpClient]
  },
  missingTranslationHandler: {
    provide: MissingTranslationHandler,
    useClass: CustomMissingTranslationHandler
  }
};

function appInitialazerFactory(translateService: TranslateService): unknown {
  return () => {
    translateService.addLangs(['pl', 'en']);
    translateService.setDefaultLang('pl');
    return translateService.use('pl');
  };
}

export const translateServiceProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitialazerFactory,
  deps: [TranslateService],
  multi: true
};
