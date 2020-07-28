import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { HttpBackend } from '@angular/common/http';
import { LoaderservicecircleService } from 'src/app/shared/loader/loaderservicecircle.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderservicecircleService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.show();
    return next.handle(req)

  }
}
