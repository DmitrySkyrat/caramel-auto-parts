import { HttpContextToken, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let clonedRequest = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'user-token'
            })
        });

        return next.handle(clonedRequest).pipe(
            tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.url?.includes('login')) {
                    if (event.body.token) {
                        console.log('Access is allowed', event);
                        return event;
                    } else {
                        throw new Error('Access is denied')
                    }
                }

                return event;
            },
            (error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401)
                      console.log('Unauthorized')
                  }
            })
        );
    }
}
