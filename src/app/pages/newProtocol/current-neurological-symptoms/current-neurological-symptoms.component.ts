import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { SintomasNeurologicosDTO } from 'src/app/clases/SintomasNeurologicosDTO';

@Component({
  selector: 'app-current-neurological-symptoms',
  templateUrl: './current-neurological-symptoms.component.html',
  styleUrls: ['./current-neurological-symptoms.component.css']
})
export class CurrentNeurologicalSymptomsComponent implements OnInit {
  @Input() symptomsEntry: SintomasNeurologicosDTO;
  @Output() event = new EventEmitter<number>();
  @Output() protocolSymptoms = new EventEmitter<SintomasNeurologicosDTO>()
  symptoms: SintomasNeurologicosDTO = new SintomasNeurologicosDTO();
  dropdownOptions: NeurologicalSymptomsDropdownOption = new NeurologicalSymptomsDropdownOption;
  constructor() { }

  ngOnInit(): void {
    this.symptoms = this.symptomsEntry;
  }
  //Limpieza de las opciones.
  clearAlerta() {
    if (this.symptoms.Alerta == 'CONSERVADO') {
      this.symptoms.AlertaTipoAlteracion = null;
      this.symptoms.AlertaTipoAlteracionOtro = null;
    }
  }
  clearAlertaCual() {
    if (this.symptoms.Alerta != 'Otro') {
      this.symptoms.AlertaTipoAlteracionOtro = null;
    }
  }
  clearEstadoEmocional() {
    if (this.symptoms.EstadoEmocional == 'CONSERVADO') {
      this.symptoms.EstadoEmocionalTipoAlteracion = null;
      this.symptoms.EstadoEmocionalTipoAlteracionOtro = null;
    }
  }
  clearEstadoEmocionalCual() {
    if (this.symptoms.EstadoEmocional != 'Otro') {
      this.symptoms.EstadoEmocionalTipoAlteracionOtro = null;
    }
  }
  clearCoordinacion() {
    if (this.symptoms.CondicionMotora == 'CONSERVADO') {
      this.symptoms.CondicionMotoraTipoAlteracion = null;
      this.symptoms.CondicionMotoraTipoAlteracionOtro = null;
    }
  }
  clearCoordinacionCual() {
    if (this.symptoms.CondicionMotora != 'Otro') {
      this.symptoms.CondicionMotoraTipoAlteracionOtro = null;
    }
  }
  clearSensibilidad() {
    if (this.symptoms.Sensibilidad == 'CONSERVADO') {
      this.symptoms.SensibilidadTipoAlteracion = null;
      this.symptoms.SensibilidadTipoAlteracionOtro = null;
    }
  }
  clearSensibilidadCual() {
    if (this.symptoms.Sensibilidad != 'Otro') {
      this.symptoms.SensibilidadTipoAlteracionOtro = null;
    }
  }

  clearFuerza() {
    if (this.symptoms.Fuerza == 'CONSERVADO') {
      this.symptoms.FuerzaTipoAlteracion = null;
      this.symptoms.FuerzaTipoAlteracionOtro = null;
    }
  }
  clearFuerzaCual() {
    if (this.symptoms.Fuerza != 'Otro') {
      this.symptoms.FuerzaTipoAlteracionOtro = null;
    }
  }

  clearVision() {
    if (this.symptoms.Vision == 'CONSERVADO') {
      this.symptoms.VisionTipoAlteracion = null;
      this.symptoms.VisionTipoAlteracionOtro = null;
    }
  }

  clearAudicion() {
    if (this.symptoms.Audicion == 'CONSERVADO') {
      this.symptoms.AudicionTipoAlteracion = null;
      this.symptoms.AudicionTipoAlteracionOtro = null;
    }
  }

  clearAtencionEspacial() {
    if (this.symptoms.AtencionEspacial == 'CONSERVADO') {
      this.symptoms.AtencionEspacialTipoAlteracion = null;
      this.symptoms.AtencionEspacialTipoAlteracionOtro = null;
    }
  }
  clearPraxiaManual() {
    if (this.symptoms.PraxiaManual == 'CONSERVADO') {
      this.symptoms.PraxiaManualTipoAlteracion = null;
      this.symptoms.PraxiaManualTipoAlteracionOtro = null;
    }
  }
  clearDeglucion() {
    if (this.symptoms.Deglucion == 'CONSERVADO') {
      this.symptoms.DeglucionTipoAlteracion = null;
      this.symptoms.DeglucionTipoAlteracionOtro = null;
    }
  }
  //Validaciones de sintomas neurologicos
  alertaValidation(): boolean {
    if (this.symptoms.Alerta == null) {
      console.log('El campo Alerta es obligatorio')
      return false
    } else {
      if (this.symptoms.Alerta == 'ALTERADO' && this.symptoms.AlertaTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Alerta')
        return false
      } else {
        if (this.symptoms.Alerta == 'ALTERADO' && this.symptoms.AlertaTipoAlteracion == 'Otro' && (this.symptoms.AlertaTipoAlteracionOtro == null || this.symptoms.AlertaTipoAlteracionOtro == '')) {
          console.log('Debe escribir el tipo de alteracion')
          return false
        } else {
          return true
        }
      }
    }
  }
  estadoEmocionalValidation(): boolean {
    if (this.symptoms.EstadoEmocional == null) {
      console.log('El campo Estado Emocional es obligatorio')
      return false
    } else {
      if (this.symptoms.EstadoEmocional == 'ALTERADO' && this.symptoms.EstadoEmocionalTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Estado Emocional')
        return false
      } else {
        if (this.symptoms.EstadoEmocional == 'ALTERADO' && this.symptoms.EstadoEmocionalTipoAlteracion == 'Otro' && (this.symptoms.EstadoEmocionalTipoAlteracionOtro == null || this.symptoms.EstadoEmocionalTipoAlteracionOtro == '')) {
          console.log('Debe escribir el tipo de alteracion para estado emocional')
          return false
        } else {
          return true
        }
      }
    }
  }
  fuerzaValidation(): boolean {
    if (this.symptoms.Fuerza == null) {
      console.log('El campo fuerza es obligatorio')
      return false
    } else {
      if (this.symptoms.Fuerza == 'ALTERADO' && this.symptoms.FuerzaTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Fuerza')
        return false
      } else {
        if (this.symptoms.Fuerza == 'ALTERADO' && this.symptoms.FuerzaTipoAlteracion == 'Otro' && (this.symptoms.FuerzaTipoAlteracionOtro == null || this.symptoms.FuerzaTipoAlteracionOtro == '')) {
          console.log('Debe escribir el tipo de alteracion')
          return false
        } else {
          return true
        }
      }
    }
  }
  coordinacionMotoraValidation(): boolean {
    if (this.symptoms.CondicionMotora == null) {
      console.log('El campo Alerta es obligatorio')
      return false
    } else {
      if (this.symptoms.CondicionMotora == 'ALTERADO' && this.symptoms.CondicionMotoraTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Alerta')
        return false
      } else {
        if (this.symptoms.CondicionMotora == 'ALTERADO' && this.symptoms.CondicionMotoraTipoAlteracion == 'Otro' &&
          (this.symptoms.CondicionMotoraTipoAlteracionOtro == null || this.symptoms.CondicionMotoraTipoAlteracionOtro == '')) {
          console.log('Debe escribir el tipo de alteracion')
          return false
        } else {
          return true
        }
      }
    }
  }
  sensibilidadValidation(): boolean {
    if (this.symptoms.Sensibilidad == null) {
      console.log('El campo Sensibilidad es obligatorio')
      return false
    } else {
      if (this.symptoms.Sensibilidad == 'ALTERADO' && this.symptoms.SensibilidadTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Sensibilidad')
        return false
      } else {
        if (this.symptoms.Sensibilidad == 'ALTERADO' && this.symptoms.SensibilidadTipoAlteracion == 'Otro' &&
          (this.symptoms.SensibilidadTipoAlteracionOtro == null || this.symptoms.SensibilidadTipoAlteracionOtro == '')) {
          console.log('Debe escribir el tipo de alteracion')
          return false
        } else {
          return true
        }
      }
    }
  }
  visionValidation(): boolean {
    if (this.symptoms.Vision == null) {
      console.log('El campo vision es obligatorio')
      return false
    } else {
      if (this.symptoms.Vision == 'ALTERADO' && (this.symptoms.VisionTipoAlteracion == null || this.symptoms.VisionTipoAlteracionOtro == null)) {
        console.log('Debe seleccionar una alteracion para vision')
        return false
      } else {
        return true

      }
    }
  }
  audicionValidation(): boolean {
    if (this.symptoms.Audicion == null) {
      console.log('El campo Audicion es obligatorio')
      return false
    } else {
      if (this.symptoms.Audicion == 'ALTERADO' && (this.symptoms.AudicionTipoAlteracion == null || this.symptoms.AudicionTipoAlteracionOtro == null)) {
        console.log('Debe seleccionar una alteracion para Audicion')
        return false
      } else {
        return true
      }
    }
  }
  atencionEspacialValidation(): boolean {
    if (this.symptoms.AtencionEspacial == null) {
      console.log('El campo Atencion Espacial es obligatorio')
      return false
    } else {
      if (this.symptoms.AtencionEspacial == 'ALTERADO' && this.symptoms.AtencionEspacialTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Atencion Espacial')
        return false
      } else {
        return true
      }
    }
  }
  praxiaManualValidation(): boolean {
    if (this.symptoms.PraxiaManual == null) {
      console.log('El campo Praxia Manual es obligatorio')
      return false
    } else {
      if (this.symptoms.PraxiaManual == 'ALTERADO' && this.symptoms.PraxiaManualTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Praxia Manual')
        return false
      } else {
        return true
      }
    }
  }
  praxiaOrolinguofacialesValidation(): boolean {
    if (this.symptoms.Alerta == null) {
      console.log('El campo Praxia Orolinguofaciales es obligatorio')
      return false
    } else {
          return true
        }
  }
  deglucionValidation(): boolean {
    if (this.symptoms.Deglucion == null) {
      console.log('El campo Alerta es obligatorio')
      return false
    } else {
      if (this.symptoms.Deglucion == 'ALTERADO' && this.symptoms.DeglucionTipoAlteracion == null) {
        console.log('Debe seleccionar una alteracion para Alerta')
        return false
      } else {
          return true
        }
    }
  }
  next() {
    if (this.alertaValidation() && this.estadoEmocionalValidation() && this.fuerzaValidation() && this.coordinacionMotoraValidation()&&
      this.sensibilidadValidation()&&this.visionValidation()&&this.audicionValidation()&&this.atencionEspacialValidation()&&
      this.praxiaManualValidation()&&this.praxiaOrolinguofacialesValidation()&&this.deglucionValidation()) {
      this.event.emit(1);
      this.protocolSymptoms.emit(this.symptoms);
    }
  }
  back() {
    this.event.emit(-1);
  }
}
