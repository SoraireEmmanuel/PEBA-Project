import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacientes } from 'src/app/clases/Pacientes';
import { ProtocolDTO } from 'src/app/clases/ProtocolDTO';
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
  //register a new patient for a professional
  patientRegister(paciente:Pacientes): Observable<any>{
    var CurrentUser:User= this._localService.getJsonValue('User');
    paciente.Id_Profesional=CurrentUser.Id_Usuario
    var RegistrarPaciente = {
      Id_Profesional: `${CurrentUser.Id_Usuario}`,
      SegundaClave:`${CurrentUser.SegundaClave}`
    };
    //const httpOptions = {
     // headers: new HttpHeaders({
     //   'Content-Type':  'application/json',
     //   Authorization: `${CurrentUser.Token}`
     // })
   // }
    return this._http.post(`${URI}RegistrarPaciente`, paciente)
  }

  //shows the patients of a proffesional
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

  //shows the protocols of a patient
  myProtocolList(Id_Paciente:number): Observable<any>{
    var CurrentUser:User= this._localService.getJsonValue('User');
    var ProtocolByPatient = {
      Id_Profesional: `${CurrentUser.Id_Usuario}`,
      SegundaClave:`${CurrentUser.SegundaClave}`,
      Id_Paciente: `${Id_Paciente}`
    };
    return this._http.post(`${URI}ObtenerProtocolosPaciente`, ProtocolByPatient)
  }

  //shows a protocol
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

  //save a new protocol
  saveProtocol(Protocol:ProtocolDTO): Observable<any>{
    return this._http.post(`${URI}SalvarProtocolo`, Protocol)
  }
}
