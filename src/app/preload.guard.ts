import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  constructor(public http: HttpClient, private router: Router) {}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const name = next.paramMap.get('name');
    const animals$ = [
      {
        name: 'aardvark',
        bio: 'The aardvark is a medium-sized, burrowing, nocturnal mammal native to Africa',
        img: '/assets/img/aardvark.jpg'
      },
      {
        name: 'elephant',
        bio: 'This is elephant',
        img: '/assets/img/elephant.jpg'
      },
      {
        name: 'moose',
        bio: 'This is moose',
        img: '/assets/img/moose.PNG'
      },
      {
        name: 'zebra',
        bio: 'This is zebra',
        img: '/assets/img/zebra.jpg'
      }
    ];
    for (const i in animals$) {
      if (animals$.hasOwnProperty(i)) {
        const animal = animals$[i];
        if (animal.name === name) {
          return new Observable((observer) => {
            observer.next(animal);
            observer.complete();
          });
        }
      }
    }
  }
}
