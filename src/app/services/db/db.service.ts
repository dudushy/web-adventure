/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  title = 'DbService';

  constructor() {
    console.log(`[${this.title}#constructor]`);

    // this.clearAll();
    this.setupDb();
  }

  setupDb() {
    console.log(`[${this.title}#setupDb]`);
  }

  clearAll() {
    console.log(`[${this.title}#clearAll]`);

    localStorage.clear();
    sessionStorage.clear();
  }

  getLocal(varname: any) {
    const output = JSON.parse(localStorage.getItem(varname) || 'null');
    console.log(`[${this.title}#get] varname: ${varname} | output:`, output);
    return output;
  }

  setLocal(varname: any, value: any) {
    console.log(`[${this.title}#set] varname: ${varname} | value:`, value);
    localStorage.setItem(varname, JSON.stringify(value));
  }

  getSession(varname: any) {
    const output = JSON.parse(sessionStorage.getItem(varname) || 'null');
    console.log(`[${this.title}#get] varname: ${varname} | output:`, output);
    return output;
  }

  setSession(varname: any, value: any) {
    console.log(`[${this.title}#set] varname: ${varname} | value:`, value);
    sessionStorage.setItem(varname, JSON.stringify(value));
  }
}
