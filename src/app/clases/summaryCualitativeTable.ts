import { ComprensionAuditiva_CualitativaDTO } from "./ComprensionAuditiva_CualitativaDTO";
import { Denominacion_CualitativaDTO } from "./Denominacion_CualitativaDTO";
import { Escritura_CualitativaDTO } from "./Escritura_CualitativaDTO";
import { ExpresionOral_CualitativaDTO } from "./ExpresionOral_CualitativaDTO";
import { Lectura_CualitativaDTO } from "./Lectura_CualitativaDTO";
import { ProtocolDTO } from "./ProtocolDTO";
import { ProtocoloDTO } from "./ProtocoloDTO";
import { Repeticion_CualitativaDTO } from "./Repeticion_CualitativaDTO";

export class summaryCualitativeTable {
  auditivaEmparejamientoPalabraOida: string;
  auditivaComandosOidos: string;
  oralFluencia: string;
  oralProsodia: string;
  oralArticulacion: string;
  oralCodificacionFonologica: string;
  oralProcesamientoSintaxtico: string;
  oralProcesamientoLexico: string;
  repeticionArticulacion: string;
  repeticionCodificacionFonologica: string;
  repeticionProcesamientoLexico: string;
  repeticionProcesamientoSintaxtico: string;
  denominacionArticulacion: string;
  denominacionCodificacionFonologica: string;
  denominacionProcesamientoLexico: string;
  lecturaLecturaNoPalabras: string;
  lecturaLecturaPalabras: string;
  lecturaEmparejamientoPalabraEscrita: string;
  lecturaComprensionComandoEscrito: string;
  escrituraMovilidadManoDominante: string;
  escrituraManoNoDominante: string;
  escrituraGrafismo: string;
  escrituraDeletreo: string;
  escrituraOrtografia: string;
  constructor() {
  }
  summary(protocol: ProtocolDTO) {
    this.summaryAuditivaCualitativa(protocol.ComprensionAuditiva_Cualitativa);
    this.summaryOralCualitativa(protocol.ExpresionOral_Cualitativa);
    this.summaryRepeticionCualitativa(protocol.Repeticion_Cualitativa);
    this.summaryDenominacionCualitativa(protocol.Denominacion_Cualitativa);
    this.summaryLecturaCualitativa(protocol.Lectura_Cualitativa);
    this.summaryEscrituraCualitativa(protocol.Escritura_Cualitativa);
  }
  private summaryAuditivaCualitativa(ComprensionAuditiva_CualitativaDTO: ComprensionAuditiva_CualitativaDTO) {
    if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == null &&
      ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == null) {
      this.auditivaEmparejamientoPalabraOida = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada != null) {
      if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 1) {
        this.auditivaEmparejamientoPalabraOida = 'Comprensión de Palabras oídas: Alteraciones '
        if (ComprensionAuditiva_CualitativaDTO.POErroresFormales == true) {
          this.auditivaEmparejamientoPalabraOida = this.auditivaEmparejamientoPalabraOida + '<Errores formales>'
        }
        if (ComprensionAuditiva_CualitativaDTO.POErroresSemanticos == true) {
          this.auditivaEmparejamientoPalabraOida = this.auditivaEmparejamientoPalabraOida + '<Errores semánticos>'
        }
        if (ComprensionAuditiva_CualitativaDTO.POErroresNoRelacionados == true) {
          this.auditivaEmparejamientoPalabraOida = this.auditivaEmparejamientoPalabraOida + '<Erroes no relacionados>'
        }
      }
      if (ComprensionAuditiva_CualitativaDTO.PalabraOidaAlterada == 0) {
        this.auditivaEmparejamientoPalabraOida = 'No se observaron Alteraciones en el emparejamiento palabra Oída-dibujo'
      }
    } else {
      this.auditivaEmparejamientoPalabraOida = 'No se cargaron observaciones en el emparejamiento palabra Oída-dibujo'
    }
    if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada != null) {
      if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 1) {
        this.auditivaComandosOidos = 'Comprensión de Comandos oídos: Alteraciones '
        if (ComprensionAuditiva_CualitativaDTO.COCambiaElOrdenDelComando == true) {
          this.auditivaComandosOidos = this.auditivaComandosOidos + '<Cambia el orden del comando> '
        }
        if (ComprensionAuditiva_CualitativaDTO.COOmiteParteDelComando == true) {
          this.auditivaComandosOidos = this.auditivaComandosOidos + '<Omite parte del Comando>'
        }
        if (ComprensionAuditiva_CualitativaDTO.COSustituyeParteDelComando == true) {
          this.auditivaComandosOidos = this.auditivaComandosOidos + '<Sustituye parte del Comando>'
        }
      }
      if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 0) {
        this.auditivaComandosOidos = 'No se observaron Alteraciones en los Comandos oídos'
      }
    } else {
      this.auditivaComandosOidos = 'No se cargaron observaciones en los Comandos oídos'
    }

  }
  private summaryOralCualitativa(ExpresionOral: ExpresionOral_CualitativaDTO) {
    if (ExpresionOral.Fluencia == null && ExpresionOral.CodificacionFonologica == null &&
      ExpresionOral.Prosodia == null && ExpresionOral.Articulacion == null &&
      ExpresionOral.ProcesamientoLexicoAlterado == null && ExpresionOral.ProcesamientoSintaxtico == null) {
      this.oralFluencia = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (ExpresionOral.Fluencia != null) {
      this.oralFluencia = 'Fluencia: '
      if (ExpresionOral.Fluencia == 0) {
        this.oralFluencia = this.oralFluencia + 'Normal'
      }
      if (ExpresionOral.Fluencia == 1) {
        this.oralFluencia = this.oralFluencia + 'Alteraciones <no Fluente>'
      }
      if (ExpresionOral.Fluencia == 2) {
        this.oralFluencia = this.oralFluencia +'Alteraciones <Logorrea>'
      }
    } else {
      this.oralFluencia = 'No se cargaron observaciones en Fluencia'
    }
    if (ExpresionOral.Prosodia != null) {
      this.oralProsodia = 'Prosodia: '
      if (ExpresionOral.Prosodia == 0) {
        this.oralProsodia = this.oralProsodia + 'Normal'
      }
      if (ExpresionOral.Prosodia == 1) {
        this.oralProsodia = this.oralProsodia +'Alteraciones <Disprosodia>'
      }
    } else {
      this.oralProsodia = 'No se cargaron observaciones en Prosodia'
    }
    if (ExpresionOral.Articulacion != null) {
      this.oralArticulacion = 'Articulacion: '
      if (ExpresionOral.Articulacion == 0) {
        this.oralArticulacion = this.oralArticulacion+ 'Normal'
      }
      if (ExpresionOral.Articulacion == 1) {
        this.oralArticulacion = this.oralArticulacion +'Alteraciones <Errores Fonéticos>'
      }
    } else {
      this.oralArticulacion = 'No se cargaron observaciones en Articulacion'
    }
    if (ExpresionOral.CodificacionFonologica != null) {
      this.oralCodificacionFonologica = 'Codificación Fonologica: '
      if (ExpresionOral.CodificacionFonologica == 0) {
        this.oralCodificacionFonologica = this.oralCodificacionFonologica +'Normal'
      }
      if (ExpresionOral.CodificacionFonologica == 1) {
        this.oralCodificacionFonologica = this.oralCodificacionFonologica + 'Alteraciones <Errores fonémicos>'
      }
    } else {
      this.oralCodificacionFonologica = 'No se cargaron observaciones en codificación fonológica'
    }
    if (ExpresionOral.ProcesamientoSintaxtico != null) {
      this.oralProcesamientoSintaxtico = 'Procesamiento Sintactico: '
      if (ExpresionOral.ProcesamientoSintaxtico == 0) {
        this.oralProcesamientoSintaxtico = this.oralProcesamientoSintaxtico + 'Normal'
      }
      if (ExpresionOral.ProcesamientoSintaxtico == 1) {
        this.oralProcesamientoSintaxtico = this.oralProcesamientoSintaxtico + 'Alterado <Agramatismos>'
      }
    } else {
      this.auditivaComandosOidos = 'No se cargaron observaciones en Procesamiento Sintactico'
    }
    if (ExpresionOral.ProcesamientoLexicoAlterado != null) {
      this.oralFluencia = 'Procesamiento Lexico: '
      if (ExpresionOral.ProcesamientoLexicoAlterado == 0) {
        this.oralFluencia = this.oralFluencia + 'Normal'
      }
      if (ExpresionOral.ProcesamientoLexicoAlterado == 1) {
        this.oralProcesamientoLexico = this.oralFluencia + 'Alterado '
        if (ExpresionOral.PLAnomias == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Anomia> '
        }
        if (ExpresionOral.PLParafasias == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Parafasias> '
        }
        if (ExpresionOral.PLMuletillas == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Muletillas> '
        }
        if (ExpresionOral.PLNeologismo == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Neologismos> '
        }
        if (ExpresionOral.PLParafasias == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Parafasias> '
        }
        if (ExpresionOral.PLPerseveraciones == true) {
          this.oralProcesamientoLexico = this.oralProcesamientoLexico + '<Perseveraciones> '
        }
      }
    } else {
      this.oralArticulacion = 'No se cargaron observaciones en Procesamiento Lexico'
    }
  }
  private summaryRepeticionCualitativa(Repeticion: Repeticion_CualitativaDTO) {
    if (Repeticion.Articulacion == null && Repeticion.CodificacionFonologica == null &&
      Repeticion.ProcesamientoLexico == null && Repeticion.ProcesamientoSintaxtico == null) {
      this.repeticionArticulacion = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (Repeticion.Articulacion != null) {
      this.repeticionArticulacion = 'Articulación: '
      if (Repeticion.Articulacion == 0) {
        this.repeticionArticulacion = this.repeticionArticulacion+'Normal'
      }
      if (Repeticion.Articulacion == 1) {
        this.repeticionArticulacion = this.repeticionArticulacion+'Alteraciones <Errores Fonéticos>'
      }
    } else {
      this.repeticionArticulacion = 'No se cargaron observaciones en Articulación'
    }
    if (Repeticion.CodificacionFonologica != null) {
      this.repeticionCodificacionFonologica = 'Codificación Fonológica: '
      if (Repeticion.CodificacionFonologica == 0) {
        this.repeticionCodificacionFonologica = this.repeticionCodificacionFonologica+ 'Normal'
      }
      if (Repeticion.CodificacionFonologica == 1) {
        this.repeticionCodificacionFonologica = this.repeticionCodificacionFonologica +'Alteraciones '
        if (Repeticion.CFFonemicos == true) {
          this.repeticionCodificacionFonologica = this.repeticionCodificacionFonologica + '<Fonémicos> '
        }
        if (Repeticion.CFLexicalizacionDeNoPalabras == true) {
          this.repeticionCodificacionFonologica = this.repeticionCodificacionFonologica + '<Lexicalización de no palabras> '
        }
      }
    } else {
      this.oralProsodia = 'No se cargaron observaciones en Codificación Fonológica'
    }
    if (Repeticion.ProcesamientoLexico != null) {
      this.repeticionProcesamientoLexico = 'Procesamiento Léxico: '
      if (Repeticion.ProcesamientoLexico == 0) {
        this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + ' Normal'
      }
      if (Repeticion.ProcesamientoLexico == 1) {
        this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico  +'Alteraciones '
        if (Repeticion.PLEstereotipias) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Estereotipias> '
        }
        if (Repeticion.PLNeologismos) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Neologismos> '
        }
        if (Repeticion.PLParafasiasFormales) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Parafasias Formales> '
        }
        if (Repeticion.PLParafasiasMorfologicas) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Parafasias Morfologicas> '
        }
        if (Repeticion.PLParafasiasSemanticas) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Parafasias Semanticas> '
        }
        if (Repeticion.PLPerseveraciones) {
          this.repeticionProcesamientoLexico = this.repeticionProcesamientoLexico + '<Perseveraciones> '
        }
      }
    } else {
      this.repeticionProcesamientoLexico = 'No se cargaron observaciones en Procesamiento Léxico'
    }
    if (Repeticion.ProcesamientoSintaxtico != null) {
      this.repeticionProcesamientoSintaxtico = 'Procesamiento Sintáctico: '
      if (Repeticion.ProcesamientoSintaxtico == 0) {
        this.repeticionProcesamientoSintaxtico = this.repeticionProcesamientoSintaxtico+'Normal'
      }
      if (Repeticion.ProcesamientoSintaxtico == 1) {
        this.repeticionProcesamientoSintaxtico = this.repeticionProcesamientoSintaxtico+'Alterado <Agramatismos>'
      }
    } else {
      this.repeticionProcesamientoSintaxtico = 'No se cargaron observaciones en el Procesamiento Sintáctico'
    }
  }
  private summaryDenominacionCualitativa(denominacion: Denominacion_CualitativaDTO) {
    if (denominacion.Articulacion == null && denominacion.CodificacionFonologica == null &&
      denominacion.ProcesamientoLexico == null) {
      this.denominacionArticulacion = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (denominacion.Articulacion != null) {
      this.denominacionArticulacion = 'Articulación: '
      if (denominacion.Articulacion == 0) {
        this.denominacionArticulacion = this.denominacionArticulacion+'Normal'
      }
      if (denominacion.Articulacion == 1) {
        this.denominacionArticulacion = this.denominacionArticulacion+'Alteraciones <Errores Fonéticos>'
      }
    } else {
      this.denominacionArticulacion = 'No se cargaron observaciones en Articulación'
    }
    if (denominacion.CodificacionFonologica != null) {
      this.denominacionCodificacionFonologica = 'Codificación Fonológica: '
      if (denominacion.CodificacionFonologica == 0) {
        this.denominacionCodificacionFonologica = this.denominacionCodificacionFonologica+'Normal'
      }
      if (denominacion.CodificacionFonologica == 1) {
        this.repeticionCodificacionFonologica = this.denominacionCodificacionFonologica+'Alteraciones <Errores Fonemicos>'
      }
    } else {
      this.oralProsodia = '<No se cargaron observaciones en Codificación Fonológica>'
    }
    if (denominacion.ProcesamientoLexico != null) {
      this.denominacionProcesamientoLexico = 'Procesamiento Léxico: '
      if (denominacion.ProcesamientoLexico == 0) {
        this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico+'Normal'
      }
      if (denominacion.ProcesamientoLexico == 1) {
        this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico+'Alteraciones '
        if (denominacion.PLAnomia) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Anomia> '
        }
        if (denominacion.PLCircunloquios) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Circunloquios> '
        }
        if (denominacion.PLEstereotipias) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Estereotipias> '
        }
        if (denominacion.PLMuletillas) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Muletillas> '
        }
        if (denominacion.PLNeologismos) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Neologismos> '
        }
        if (denominacion.PLParafasiasFormales) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<ParafasiasFormales> '
        }
        if (denominacion.PLParafasiasMorfologicas) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<ParafasiasMorfologicas> '
        }
        if (denominacion.PLParafasiasSemanticas) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<ParafasiasSemanticas> '
        }
        if (denominacion.PLPerseveraciones) {
          this.denominacionProcesamientoLexico = this.denominacionProcesamientoLexico + '<Perseveraciones> '
        }
      }
    } else {
      this.repeticionProcesamientoLexico = 'No se cargaron observaciones en Procesamiento Léxico'
    }
  }
  private summaryLecturaCualitativa(Lectura: Lectura_CualitativaDTO) {
    if (Lectura.ComprensionDeComandoEscrito == null && Lectura.LecturaDeNoPalabras == null &&
      Lectura.LecturaDePalabras == null && Lectura.ComprensionDeComandoEscrito == null) {
      this.lecturaLecturaNoPalabras = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (Lectura.ComprensionDeComandoEscrito != null) {
      this.lecturaComprensionComandoEscrito = 'Comprension de Comando Escrito: '
      if (Lectura.ComprensionDeComandoEscrito == 0) {
        this.lecturaComprensionComandoEscrito = this.lecturaComprensionComandoEscrito+ 'Normal'
      }
      if (Lectura.ComprensionDeComandoEscrito == 1) {
        this.lecturaComprensionComandoEscrito = this.lecturaComprensionComandoEscrito+'Alteraciones '
        if (Lectura.CDCEAlteracionDelOrden) {
          this.lecturaComprensionComandoEscrito = this.lecturaComprensionComandoEscrito + '<Alteracion Del Orden>'
        }
        if (Lectura.CDCEOmisionDeParte) {
          this.lecturaComprensionComandoEscrito = this.lecturaComprensionComandoEscrito + '<Omision De Parte>'
        }
        if (Lectura.CDCESustitucionDeParte) {
          this.lecturaComprensionComandoEscrito = this.lecturaComprensionComandoEscrito + '<Sustitucion De Parte>'
        }
      }
    } else {
      this.lecturaComprensionComandoEscrito = 'No se cargaron observaciones en Comprension de Comando Escrito'
    }
    if (Lectura.LecturaDeNoPalabras != null) {
      this.lecturaLecturaNoPalabras = 'Lectura de No Palabras: '
      if (Lectura.LecturaDeNoPalabras == 0) {
        this.lecturaLecturaNoPalabras = this.lecturaLecturaNoPalabras+'Normal'
      }
      if (Lectura.LecturaDeNoPalabras == 1) {
        this.lecturaLecturaNoPalabras = this.lecturaLecturaNoPalabras+'Alteraciones '
        if (Lectura.LNPLexicalizacionDeNoPalabras == true) {
          this.lecturaLecturaNoPalabras = this.lecturaLecturaNoPalabras + '<Lexicalizacion De No Palabras> '
        }
        if (Lectura.LNPNoPalabrasErroneas == true) {
          this.lecturaLecturaNoPalabras = this.lecturaLecturaNoPalabras + '<No Palabras Erroneas> '
        }
      }
    } else {
      this.lecturaLecturaNoPalabras = 'No se cargaron observaciones en Lectura de No Palabras'
    }
    if (Lectura.LecturaDePalabras != null) {
      this.lecturaLecturaPalabras = 'Lectura de Palabras: '
      if (Lectura.LecturaDePalabras == 0) {
        this.lecturaLecturaPalabras = this.lecturaLecturaPalabras+'Normal'
      }
      if (Lectura.LecturaDePalabras == 1) {
        this.lecturaLecturaPalabras = this.lecturaLecturaPalabras+'Alteraciones '
        if (Lectura.LPParalexiasFormales) {
          this.lecturaLecturaPalabras = this.lecturaLecturaPalabras + '<Paralexias Formales> '
        }
        if (Lectura.LPParalexiasMorfologicas) {
          this.lecturaLecturaPalabras = this.lecturaLecturaPalabras + '<Paralexias Morfologicas> '
        }
        if (Lectura.LPParalexiasSemanticas) {
          this.lecturaLecturaPalabras = this.lecturaLecturaPalabras + '<Paralexias Semanticas> '
        }
        if (Lectura.LPSustitucionPorNoPalabras) {
          this.lecturaLecturaPalabras = this.lecturaLecturaPalabras + '<Sustitucion Por No Palabras> '
        }
      }
    } else {
      this.lecturaLecturaPalabras = 'No se cargaron observaciones en Lectura de Palabras'
    }
    if (Lectura.EmparejamientoPalabraEscritaDibujo != null) {
      this.lecturaEmparejamientoPalabraEscrita = 'Emparejamiento de palabra escrita con dibujo: '
      if (Lectura.EmparejamientoPalabraEscritaDibujo == 0) {
        this.lecturaEmparejamientoPalabraEscrita = this.lecturaEmparejamientoPalabraEscrita+'Normal'
      }
      if (Lectura.EmparejamientoPalabraEscritaDibujo == 1) {
        this.lecturaEmparejamientoPalabraEscrita = this.lecturaEmparejamientoPalabraEscrita+'Alteraciones '
        if(Lectura.EPEDErroresFormales){
          this.lecturaEmparejamientoPalabraEscrita=this.lecturaEmparejamientoPalabraEscrita+'<Errores Formales>'
        }
        if(Lectura.EPEDErroresNoRelacionados){
          this.lecturaEmparejamientoPalabraEscrita=this.lecturaEmparejamientoPalabraEscrita+'<Errores No Relacionados>'
        }
        if(Lectura.EPEDErroresSemanticos){
          this.lecturaEmparejamientoPalabraEscrita=this.lecturaEmparejamientoPalabraEscrita+'<Errores Semanticos>'
        }
      }
    } else {
      this.lecturaEmparejamientoPalabraEscrita= 'No se cargaron observaciones en Emparejamiento de palabra escrita con dibujo'
    }
  }
  private summaryEscrituraCualitativa(Escritura: Escritura_CualitativaDTO){
    if (Escritura.MovilidadDeLaManoDominante == null && Escritura.ManoNoDominante == null &&
      Escritura.Grafismo == null && Escritura.Deletreo == null &&
      Escritura.Ortografia == null) {
      this.escrituraMovilidadManoDominante = 'No se realizaron observaciones cualitativas.'
      return
    }
    if (Escritura.MovilidadDeLaManoDominante != null) {
      this.escrituraMovilidadManoDominante = 'Escritura Mano Dominante: '
      if (Escritura.MovilidadDeLaManoDominante == 0) {
        this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante+'Normal'
      }
      if (Escritura.MovilidadDeLaManoDominante == 1) {
        this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante+'Alteraciones '
        if (Escritura.MMDPlejia) {
          this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante + '<Plejia>'
        }
        if (Escritura.MMDParesiaDeLaManoDominante) {
          this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante + '<Parecia>'
        }
      }
    } else {
      this.escrituraMovilidadManoDominante = 'No se cargaron observaciones en Movilidad Mano Dominante'
    }
    if (Escritura.Deletreo != null) {
      this.escrituraDeletreo = 'Deletreo: '
      if (Escritura.Deletreo == 0) {
        this.escrituraDeletreo = this.escrituraDeletreo+'Normal'
      }
      if (Escritura.Deletreo == 1) {
        this.escrituraDeletreo = this.escrituraDeletreo+'Alteraciones '
        if (Escritura.DAdicionDeLetrasQueResultanEnNoPalabra) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Adición de letras>'
        }
        if (Escritura.DOmision) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Omisión de letras>'
        }
        if (Escritura.DSustitucion) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Sustitución de letras>'
        }
      }
    } else {
      this.escrituraDeletreo = 'No se cargaron observaciones en Deletreo'
    }
    if (Escritura.Ortografia != null) {
      this.escrituraOrtografia = 'Ortografía: '
      if (Escritura.Ortografia == 0) {
        this.escrituraOrtografia = this.escrituraOrtografia+' Normal'
      }
      if (Escritura.Ortografia == 1) {
        this.escrituraOrtografia = this.escrituraOrtografia+'Alteraciones '
        if (Escritura.OErroresFonologicamentePlausibles) {
          this.escrituraOrtografia = this.escrituraOrtografia + '<Errores fonológicamente plausibles>'
        }
        if (Escritura.OLexicalizacionDeNoPalabras) {
          this.escrituraOrtografia = this.escrituraOrtografia + '<Lexicalización de no palabras>'
        }
        if (Escritura.OParagrafiasFormales) {
          this.escrituraOrtografia = this.escrituraOrtografia + '<Paragrafias formales>'
        }
        if (Escritura.OParagrafiasMorfologicas) {
          this.escrituraOrtografia = this.escrituraOrtografia + '<Paragrafias Morfologica>'
        }
        if (Escritura.OParagrafiasSemanticas) {
          this.escrituraOrtografia = this.escrituraOrtografia + '<Paragrafias Semanticas>'
        }
      }
    } else {
      this.escrituraOrtografia = 'No se cargaron observaciones en Movilidad Mano Dominante'
    }
  }
}
