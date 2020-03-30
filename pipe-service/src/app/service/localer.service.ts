import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }

  saveLocalStorage(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getLocalStorage() {
    localStorage.getItem('data');
    console.log(localStorage.getItem('data'));
  }

  saveSessionStorage(data: any) {
    sessionStorage.setItem('data', JSON.stringify(data));
  }

  getSessionStorage() {
    sessionStorage.getItem('data');
    console.log(sessionStorage.getItem('data'));
  }
}
