import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public baseURL : string = " http://localhost:3000/"
  constructor() { }
}
