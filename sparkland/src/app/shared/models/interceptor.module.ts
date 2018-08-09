import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({setHeaders:{ ['Access-Control-Allow-Origin']: 'http://localhost:4000/api/*'} });
        return next.handle(dupReq);
    }
}

@NgModule({
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
    ]
})

export class InterceptorModule { }
