import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageMethodes } from '../helpers/LocalStorageMethods';


@Injectable({
  providedIn: 'root',
})
export class LocalStorageMethodService {
  constructor() {}
  private readonly platformId = inject(PLATFORM_ID);
  myLocarStorage(
    method: LocalStorageMethodes,
    key: string = '',
    value: string = ''
  ) {
    if (isPlatformBrowser(this.platformId)) { // Ensure this code runs only in the browser
      switch (method) {
        case 'setItem':
          localStorage.setItem(key, value);
          break;
        case 'getItem':
          return localStorage.getItem(key);
        case 'check':
          return !!localStorage.getItem(key); // Returns true if the item exists, false otherwise
        case 'removeItem':
          localStorage.removeItem(key);
          break;
        case 'clear':
          localStorage.clear();
          break;
        default:
          return null;
      }
    }

    return;
  }
}
