import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  activeRequests: number = 0;
  constructor(private loader: LoadingService) {}
  // interceptor to show the loading when the request is sent and hide it when the request is finished
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.activeRequests === 0) {
        this.loader.show();
    }

    this.activeRequests++;

    return next.handle(request).pipe(
        finalize(() => {
            this.activeRequests--;
            if (this.activeRequests === 0) {
                this.loader.hide();
            }
        })
    )
};
}
