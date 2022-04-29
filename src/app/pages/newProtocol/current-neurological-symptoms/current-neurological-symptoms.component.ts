import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NeurologicalSymptomsDropdownOption } from 'src/app/clases/NeurologicalSymptomsDropdownOption';
import { SintomasNeurologicosDTO } from 'src/app/clases/SintomasNeurologicosDTO';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.symptoms = this.symptomsEntry;
  }
  //Limpieza de las opciones.
  clearAlerta() {
    if (this.symptoms.Alerta == 'CONSERVADO') {
      this.symptoms.AlertaTipoAlteracion = '';
      this.symptoms.AlertaTipoAlteracionOtro = '';
    }
  }
  clearAlertaCual() {
    if (this.symptoms.Alerta != 'Otro') {
      this.symptoms.AlertaTipoAlteracionOtro = '';
    }
  }
  clearEstadoEmocional() {
    if (this.symptoms.EstadoEmocional == 'CONSERVADO') {
      this.symptoms.EstadoEmocionalTipoAlteracion = '';
      this.symptoms.EstadoEmocionalTipoAlteracionOtro = '';
    }
  }
  clearEstadoEmocionalCual() {
    if (this.symptoms.EstadoEmocional != 'Otro') {
      this.symptoms.EstadoEmocionalTipoAlteracionOtro = '';
    }
  }
  clearCoordinacion() {
    if (this.symptoms.CondicionMotora == 'CONSERVADO') {
      this.symptoms.CondicionMotoraTipoAlteracion = '';
      this.symptoms.CondicionMotoraTipoAlteracionOtro = '';
    }
  }
  clearCoordinacionCual() {
    if (this.symptoms.CondicionMotora != 'Otro') {
      this.symptoms.CondicionMotoraTipoAlteracionOtro = '';
    }
  }
  clearSensibilidad() {
    if (this.symptoms.Sensibilidad == 'CONSERVADO') {
      this.symptoms.SensibilidadTipoAlteracion = '';
      this.symptoms.SensibilidadTipoAlteracionOtro = '';
    }
  }
  clearSensibilidadCual() {
    if (this.symptoms.Sensibilidad != 'Otro') {
      this.symptoms.SensibilidadTipoAlteracionOtro = '';
    }
  }

  clearFuerza() {
    if (this.symptoms.Fuerza == 'CONSERVADO') {
      this.symptoms.FuerzaTipoAlteracion = '';
      this.symptoms.FuerzaTipoAlteracionOtro = '';
    }
  }
  clearFuerzaCual() {
    if (this.symptoms.Fuerza != 'Otro') {
      this.symptoms.FuerzaTipoAlteracionOtro = null;
    }
  }

  clearVision() {
    if (this.symptoms.Vision == 'CONSERVADO') {
      this.symptoms.VisionTipoAlteracion = '';
      this.symptoms.UsaAnteojos = null;
    }
  }

  clearAudicion() {
    if (this.symptoms.Audicion == 'CONSERVADO') {
      this.symptoms.AudicionTipoAlteracion = '';
      this.symptoms.UsaAudifono = null;
    }
  }

  clearAtencionEspacial() {
    if (this.symptoms.AtencionEspacial == 'CONSERVADO') {
      this.symptoms.AtencionEspacialTipoAlteracion = '';
    }
  }
  clearPraxiaManual() {
    if (this.symptoms.PraxiaManual == 'CONSERVADO') {
      this.symptoms.PraxiaManualTipoAlteracion = '';
    }
  }
  clearDeglucion() {
    if (this.symptoms.Deglucion == 'CONSERVADO') {
      this.symptoms.DeglucionTipoAlteracion = '';
    }
  }
  //Validaciones de sintomas neurologicos
  alertaValidation(): boolean {
    if (this.symptoms.Alerta == null) {
      this._toastr.error('El campo Alerta es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Alerta == 'ALTERADO' && this.symptoms.AlertaTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Alerta','Compruebe los campos');
        return false
      } else {
        if (this.symptoms.Alerta == 'ALTERADO' && this.symptoms.AlertaTipoAlteracion == 'Otro' && (this.symptoms.AlertaTipoAlteracionOtro == null || this.symptoms.AlertaTipoAlteracionOtro == '')) {
          this._toastr.error('Debe escribir el tipo de alteracion para Alerta','Compruebe los campos');
          return false
        } else {
          return true
        }
      }
    }
  }
  estadoEmocionalValidation(): boolean {
    if (this.symptoms.EstadoEmocional == null) {
      this._toastr.error('El campo Estado Emocional es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.EstadoEmocional == 'ALTERADO' && this.symptoms.EstadoEmocionalTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Estado Emocional','Compruebe los campos');
        return false
      } else {
        if (this.symptoms.EstadoEmocional == 'ALTERADO' && this.symptoms.EstadoEmocionalTipoAlteracion == 'Otro' && (this.symptoms.EstadoEmocionalTipoAlteracionOtro == null || this.symptoms.EstadoEmocionalTipoAlteracionOtro == '')) {
          this._toastr.error('Debe escribir el tipo de alteracion para estado emocional','Compruebe los campos');
          return false
        } else {
          return true
        }
      }
    }
  }
  fuerzaValidation(): boolean {
    if (this.symptoms.Fuerza == null) {
      this._toastr.error('El campo fuerza es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Fuerza == 'ALTERADO' && this.symptoms.FuerzaTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Fuerza','Compruebe los campos');
        return false
      } else {
        if (this.symptoms.Fuerza == 'ALTERADO' && this.symptoms.FuerzaTipoAlteracion == 'Otro' && (this.symptoms.FuerzaTipoAlteracionOtro == null || this.symptoms.FuerzaTipoAlteracionOtro == '')) {
          this._toastr.error('Debe escribir el tipo de alteracion para Fuerza','Compruebe los campos');
          return false
        } else {
          return true
        }
      }
    }
  }
  coordinacionMotoraValidation(): boolean {
    if (this.symptoms.CondicionMotora == null) {
      this._toastr.error('El campo Coordinacion Motora es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.CondicionMotora == 'ALTERADO' && this.symptoms.CondicionMotoraTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Coordinacion Motora','Compruebe los campos');
        return false
      } else {
        if (this.symptoms.CondicionMotora == 'ALTERADO' && this.symptoms.CondicionMotoraTipoAlteracion == 'Otro' &&
          (this.symptoms.CondicionMotoraTipoAlteracionOtro == null || this.symptoms.CondicionMotoraTipoAlteracionOtro == '')) {
            this._toastr.error('Debe escribir el tipo de alteracion para Coordinacion Motora','Compruebe los campos');
          return false
        } else {
          return true
        }
      }
    }
  }
  sensibilidadValidation(): boolean {
    if (this.symptoms.Sensibilidad == null) {
      this._toastr.error('El campo Sensibilidad es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Sensibilidad == 'ALTERADO' && this.symptoms.SensibilidadTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Sensibilidad','Compruebe los campos');
        return false
      } else {
        if (this.symptoms.Sensibilidad == 'ALTERADO' && this.symptoms.SensibilidadTipoAlteracion == 'Otro' &&
          (this.symptoms.SensibilidadTipoAlteracionOtro == null || this.symptoms.SensibilidadTipoAlteracionOtro == '')) {
          this._toastr.error('Debe escribir el tipo de alteracion para Sensibilidad','Compruebe los campos');
          return false
        } else {
          return true
        }
      }
    }
  }
  visionValidation(): boolean {
    if (this.symptoms.Vision == null) {
      this._toastr.error('El campo vision es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Vision == 'ALTERADO' && (this.symptoms.VisionTipoAlteracion == null || this.symptoms.UsaAnteojos == null)) {
        this._toastr.error('Debe seleccionar una alteracion para vision','Compruebe los campos');
        return false
      } else {
        return true
      }
    }
  }
  audicionValidation(): boolean {
    if (this.symptoms.Audicion == null) {
      this._toastr.error('El campo Audicion es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Audicion == 'ALTERADO' && (this.symptoms.AudicionTipoAlteracion == null || this.symptoms.UsaAudifono == null)) {
        this._toastr.error('Debe seleccionar una alteracion para Audicion','Compruebe los campos');
        return false
      } else {
        return true
      }
    }
  }
  atencionEspacialValidation(): boolean {
    if (this.symptoms.AtencionEspacial == null) {
      this._toastr.error('El campo Atencion Espacial es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.AtencionEspacial == 'ALTERADO' && this.symptoms.AtencionEspacialTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Atencion Espacial','Compruebe los campos');
        return false
      } else {
        return true
      }
    }
  }
  praxiaManualValidation(): boolean {
    if (this.symptoms.PraxiaManual == null) {
      this._toastr.error('El campo Praxia Manual es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.PraxiaManual == 'ALTERADO' && this.symptoms.PraxiaManualTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Praxia Manual','Compruebe los campos');
        return false
      } else {
        return true
      }
    }
  }
  praxiaOrolinguofacialesValidation(): boolean {
    if (this.symptoms.Alerta == null) {
      this._toastr.error('El campo Praxia Orolinguofaciales es obligatorio','Compruebe los campos');
      return false
    } else {
          return true
        }
  }
  deglucionValidation(): boolean {
    if (this.symptoms.Deglucion == null) {
      this._toastr.error('El campo Deglucion es obligatorio','Compruebe los campos');
      return false
    } else {
      if (this.symptoms.Deglucion == 'ALTERADO' && this.symptoms.DeglucionTipoAlteracion == null) {
        this._toastr.error('Debe seleccionar una alteracion para Deglucion','Compruebe los campos');
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
