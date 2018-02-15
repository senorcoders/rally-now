// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { UsersProvider } from './users';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   // constructor(public auth: UsersProvider) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     request = request.clone({
//       setHeaders: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//     	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
//     	'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier',
//         'Access-Control-Max-Age': '1728000',
//         // Authorization: `${this.auth.getToken()}`
        
//       }
//     });

//     return next.handle(request);
//   }
// }