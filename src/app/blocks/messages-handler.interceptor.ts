import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AlertMessagesService } from '../shared/services/alert-messages.service';

export enum MessageType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export class Message {
  messageCode: string
  messagesType: MessageType
}

@Injectable()
export class MessagesHandlerInterceptor implements HttpInterceptor {
  private readonly alertMessagesService = inject(AlertMessagesService)

  // TODO -> will we need it?
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse && event.body?.messages) {
            event.body.messages.forEach((message: Message) =>
              message.messagesType === MessageType.ERROR
                ? this.alertMessagesService.error(message.messageCode)
                : this.alertMessagesService.info(message.messageCode)
            );
          }
        }
      })
    );
  }
}
