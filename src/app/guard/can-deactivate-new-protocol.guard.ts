import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NewProtocolComponent } from '../pages/newProtocol/new-protocol/new-protocol.component';
import { LocalServiceService } from '../services/CryptoServices/LocalService/local-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateNewProtocolGuard implements CanDeactivate<NewProtocolComponent> {
  constructor(private _loadService:LocalServiceService){

  }
  canDeactivate(
    component: NewProtocolComponent){
      if(this._loadService.getJsonValue('ExitProtocol')==null){
        return true
      }
      if(this._loadService.getJsonValue('ExitProtocol').ExitProtocol){
        const confirmation = window.confirm('¿Quiere salir de la carga del protocolo? Tenga en cuenta que perdera los datos cargados')
        if(confirmation){
          this._loadService.removeKey('ExitProtocol')
          console.log(true)
          return true
        }else{
          console.log(false)
          return false
        }
      }
    return true;
  }

}
