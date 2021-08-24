import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userData: {}
  private token: string
  constructor() { }

  setUserData(user) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('user'))
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', JSON.stringify(token))
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'))
  }
  
}
