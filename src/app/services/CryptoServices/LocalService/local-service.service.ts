import { Injectable } from '@angular/core';
import { StorageServiceService } from '../StorageService/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor(private storageService: StorageServiceService) { }
  setJsonValue(key: string, value: any) {
    this.storageService.secureStorage.setItem(key, value);
  }
  // Get the json value from local
  getJsonValue(key: string) {
    return this.storageService.secureStorage.getItem(key);
  }// Clear the local
  clearToken() {
    return this.storageService.secureStorage.clear();
  }
  removeKey(key: string){
    const codKey = this.storageService.secureStorage.key(key);
    localStorage.removeItem(codKey);
  }

}
