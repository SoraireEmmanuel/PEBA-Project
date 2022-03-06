import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Escritura_CualitativaDTO } from 'src/app/clases/Escritura_CualitativaDTO';
import { Escritura_CuantitativaDTO } from 'src/app/clases/Escritura_CuantitativaDTO';
import { QuestionStep6 } from 'src/app/clases/QuestionStep6';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  @Output() event = new EventEmitter<number>();
  @Output () emitCualitativa = new EventEmitter<Escritura_CualitativaDTO>();
  @Output () emitCuantitativa = new EventEmitter<Escritura_CuantitativaDTO>();
  @Input () escrituracuantitativa:Escritura_CuantitativaDTO;
  @Input () escrituracualitativa:Escritura_CualitativaDTO;
DropdownOptions:QuestionStep6= new QuestionStep6();
EscrituraCuantitativa:Escritura_CuantitativaDTO=new Escritura_CuantitativaDTO();
EscruturaCualitativa:Escritura_CualitativaDTO=new Escritura_CualitativaDTO();
CopyEscruturaCualitativa:Escritura_CualitativaDTO=new Escritura_CualitativaDTO();
  constructor(public _ModalService:NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.EscrituraCuantitativa=this.escrituracuantitativa;
    this.EscruturaCualitativa= this.escrituracualitativa;
    this.CopyEscruturaCualitativa=this.escrituracualitativa;
  }
  open(register){
    const modalRef = this._ModalService.open(register, { size: 'xl' })
  }

  suspend(){
    this.EscrituraCuantitativa.WasSuspended = true;
  }

  total(){
    this.EscrituraCuantitativa.SubTotal=this.EscrituraCuantitativa.Aclaracion+
                                        this.EscrituraCuantitativa.Dirchole+
                                        this.EscrituraCuantitativa.EME+
                                        this.EscrituraCuantitativa.Esperanza+
                                        this.EscrituraCuantitativa.Gente+
                                        this.EscrituraCuantitativa.Guela+
                                        this.EscrituraCuantitativa.Jo+
                                        this.EscrituraCuantitativa.ManoMano+
                                        this.EscrituraCuantitativa.ZETA;
  }
  saved(){
    this.CopyEscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra;
    this.CopyEscruturaCualitativa.DOmision=this.EscruturaCualitativa.DOmision;
    this.CopyEscruturaCualitativa.DSustitucion=this.EscruturaCualitativa.DSustitucion;
    this.CopyEscruturaCualitativa.Deletreo=this.EscruturaCualitativa.Deletreo;
    this.CopyEscruturaCualitativa.Grafismo=this.EscruturaCualitativa.Grafismo;
    this.CopyEscruturaCualitativa.MMDParesiaDeLaManoDominante=this.EscruturaCualitativa.MMDParesiaDeLaManoDominante;
    this.CopyEscruturaCualitativa.MMDPlejia=this.EscruturaCualitativa.MMDPlejia;
    this.CopyEscruturaCualitativa.ManoNoDominante=this.EscruturaCualitativa.ManoNoDominante;
    this.CopyEscruturaCualitativa.MovilidadDeLaManoDominante=this.EscruturaCualitativa.MovilidadDeLaManoDominante;
    this.CopyEscruturaCualitativa.OErroresFonologicamentePlausibles=this.EscruturaCualitativa.OErroresFonologicamentePlausibles;
    this.CopyEscruturaCualitativa.OLexicalizacionDeNoPalabras=this.EscruturaCualitativa.OLexicalizacionDeNoPalabras;
    this.CopyEscruturaCualitativa.OParagrafiasFormales=this.EscruturaCualitativa.OParagrafiasFormales;
    this.CopyEscruturaCualitativa.OParagrafiasMorfologicas=this.EscruturaCualitativa.OParagrafiasMorfologicas;
    this.CopyEscruturaCualitativa.OParagrafiasSemanticas=this.EscruturaCualitativa.OParagrafiasSemanticas;
    this.CopyEscruturaCualitativa.Ortografia=this.EscruturaCualitativa.Ortografia;

  }
  cancel(){
    this.EscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra=this.CopyEscruturaCualitativa.DAdicionDeLetrasQueResultanEnNoPalabra;
    this.EscruturaCualitativa.DOmision=this.CopyEscruturaCualitativa.DOmision;
    this.EscruturaCualitativa.DSustitucion=this.CopyEscruturaCualitativa.DSustitucion;
    this.EscruturaCualitativa.Deletreo=this.CopyEscruturaCualitativa.Deletreo;
    this.EscruturaCualitativa.Grafismo=this.CopyEscruturaCualitativa.Grafismo;
    this.EscruturaCualitativa.MMDParesiaDeLaManoDominante=this.CopyEscruturaCualitativa.MMDParesiaDeLaManoDominante;
    this.EscruturaCualitativa.MMDPlejia=this.CopyEscruturaCualitativa.MMDPlejia;
    this.EscruturaCualitativa.ManoNoDominante=this.CopyEscruturaCualitativa.ManoNoDominante;
    this.EscruturaCualitativa.MovilidadDeLaManoDominante=this.CopyEscruturaCualitativa.MovilidadDeLaManoDominante;
    this.EscruturaCualitativa.OErroresFonologicamentePlausibles=this.CopyEscruturaCualitativa.OErroresFonologicamentePlausibles;
    this.EscruturaCualitativa.OLexicalizacionDeNoPalabras=this.CopyEscruturaCualitativa.OLexicalizacionDeNoPalabras;
    this.EscruturaCualitativa.OParagrafiasFormales=this.CopyEscruturaCualitativa.OParagrafiasFormales;
    this.EscruturaCualitativa.OParagrafiasMorfologicas=this.CopyEscruturaCualitativa.OParagrafiasMorfologicas;
    this.EscruturaCualitativa.OParagrafiasSemanticas=this.CopyEscruturaCualitativa.OParagrafiasSemanticas;
    this.EscruturaCualitativa.Ortografia=this.CopyEscruturaCualitativa.Ortografia;
  }

  next() {
    this.event.emit(1)
    this.emitCualitativa.emit(this.EscruturaCualitativa);
    this.emitCuantitativa.emit(this.EscrituraCuantitativa);
  }
  back() {
    this.event.emit(-1)
  }
}
