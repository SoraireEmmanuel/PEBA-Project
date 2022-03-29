import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/clases/user';
import { environment } from 'src/environments/environment';
import { LocalServiceService } from '../CryptoServices/LocalService/local-service.service';

const URI = environment.PEBA_Api_URL_Base;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _localService:LocalServiceService,
    private _http:HttpClient) {
  }
  myPatientList(): Observable<any>{
    var CurrentUser:User= this._localService.getJsonValue('User');
    var PacientesByProfesionalId = {
      Id_Profesional: `${CurrentUser.Id_Usuario}`,
      SegundaClave:`${CurrentUser.SegundaClave}`
    };
    //const httpOptions = {
     // headers: new HttpHeaders({
     //   'Content-Type':  'application/json',
     //   Authorization: `${CurrentUser.Token}`
     // })
   // }
    return this._http.post(`${URI}PacientesDeUnProfesional`, PacientesByProfesionalId)
  }
  myProtocolList(Id_Paciente:number): Observable<any>{
    var CurrentUser:User= this._localService.getJsonValue('User');
    var ProtocolByPatient = {
      Id_Profesional: `${CurrentUser.Id_Usuario}`,
      SegundaClave:`${CurrentUser.SegundaClave}`,
      Id_Paciente: `${Id_Paciente}`
    };
    return this._http.post(`${URI}ObtenerProtocolosPaciente`, ProtocolByPatient)
  }
  viewProtocol(Id_Paciente:number, Id_Protocolo:number): Observable<any>{
    var CurrentUser:User= this._localService.getJsonValue('User');
    var ViewProtocol = {
      Id_Profesional: `${CurrentUser.Id_Usuario}`,
      Id_Paciente: `${Id_Paciente}`,
      Id_Protocolo:  `${Id_Protocolo}`,
      SegundaClave:`${CurrentUser.SegundaClave}`
    };
    return this._http.post(`${URI}VerProtocolo`, ViewProtocol)
  }
}
