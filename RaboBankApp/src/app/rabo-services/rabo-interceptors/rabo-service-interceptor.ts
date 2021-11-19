import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class RaboServiceInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {
            request = request.clone({
                setHeaders: {
                    "Access-Control-Expose-Headers": 'Access-Control-*',
                    'Access-Control-Allow-Origin': '*',
                    'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-Webkit-CSP': 'default-src \'self\'',
                    'Access-Control-Allow-Credentials': 'true',
                    'X-Content-Security-Policy': 'default-src \'self\'',
                    'X-Content-Type-Options': 'nosniff',
                    'X-XSS-Protection': '',
                    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With,Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization'
                }
            });
            return next.handle(request)
                .pipe(
                    map((event: HttpEvent<any>) => {
                        return event;
                    }),
                    catchError((error: HttpErrorResponse) => {
                        let data = {};
                        if (error.error !== undefined) {
                            data = {
                                reason: error && error.error.reason ? error.error.reason : '',
                                status: error.status
                            };
                            return throwError(error);
                        }
                    }));
        } catch (err) {
        }
    }
}
