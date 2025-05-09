import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$ = new BehaviorSubject<string[]>([]);

  constructor() { }
}
