import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TycService {
  tyc$ = new EventEmitter<boolean>();
  constructor() { }
}
