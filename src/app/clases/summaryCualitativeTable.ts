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
        this.auditivaEmparejamientoPalabraOida = 'Se observaron las siguientes Alteraciones en las Palabras Oídas: '
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
      this.auditivaEmparejamientoPalabraOida = '<No se cargaron observaciones en el emparejamiento palabra Oída-dibujo>'
    }
    if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada != null) {
      if (ComprensionAuditiva_CualitativaDTO.ComandosOidosAlterada == 1) {
        this.auditivaComandosOidos = 'Se observaron las siguientes Alteraciones en los comandos oídos: '
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
        this.auditivaComandosOidos = 'No se observaron Alteraciones en los comandos oídos'
      }
    } else {
      this.auditivaComandosOidos = 'No se cargaron observaciones en los comandos oídos'
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
      if (ExpresionOral.Fluencia == 0) {
        this.oralFluencia = 'Se observo Fluencia Normal'
      }
      if (ExpresionOral.Fluencia == 1) {
        this.oralFluencia = 'Se observo Alterada no Fluente'
      }
      if (ExpresionOral.Fluencia == 2) {
        this.oralFluencia = 'Se observo Alterada no Gorrea'
      }
    } else {
      this.oralFluencia = 'No se cargaron observaciones en Fluencia'
    }
    if (ExpresionOral.Prosodia != null) {
      if (ExpresionOral.Prosodia == 0) {
        this.oralProsodia = 'Se observo Prosodia Normal'
      }
      if (ExpresionOral.Prosodia == 1) {
        this.oralProsodia = 'Se observo Alterada Disprosodia'
      }
    } else {
      this.oralProsodia = 'No se cargaron observaciones en Prosodia'
    }
    if (ExpresionOral.Articulacion != null) {
      if (ExpresionOral.Articulacion == 0) {
        this.oralArticulacion = 'Se observo Articulacion Normal'
      }
      if (ExpresionOral.Articulacion == 1) {
        this.oralArticulacion = 'Se observo Articulacion Alterada Errores Fonéticos'
      }
    } else {
      this.oralArticulacion = 'No se cargaron observaciones en Articulacion'
    }
    if (ExpresionOral.CodificacionFonologica != null) {
      if (ExpresionOral.CodificacionFonologica == 0) {
        this.oralCodificacionFonologica = 'Se observo Codificación Fonologica Normal'
      }
      if (ExpresionOral.CodificacionFonologica == 1) {
        this.oralCodificacionFonologica = 'Se observo Alterada la codificación fonológica: Errores fonémicos'
      }
    } else {
      this.oralCodificacionFonologica = 'No se cargaron observaciones en codificación fonológica'
    }
    if (ExpresionOral.ProcesamientoSintaxtico != null) {
      if (ExpresionOral.ProcesamientoSintaxtico == 0) {
        this.oralProcesamientoSintaxtico = 'Se observo Procesamiento Sintactico Normal'
      }
      if (ExpresionOral.ProcesamientoSintaxtico == 1) {
        this.oralProcesamientoSintaxtico = 'Se observo Procesamiento Sintactico Alterado: Agramatismos'
      }
    } else {
      this.auditivaComandosOidos = 'No se cargaron observaciones en Procesamiento Sintactico'
    }
    if (ExpresionOral.ProcesamientoLexicoAlterado != null) {
      if (ExpresionOral.ProcesamientoLexicoAlterado == 0) {
        this.oralFluencia = 'Se observo Procesamiento Lexico Normal'
      }
      if (ExpresionOral.ProcesamientoLexicoAlterado == 1) {
        this.oralProcesamientoLexico = 'Se observaron las siguientes Alteraciones en el Procesamiento Lexico: '
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
      if (Repeticion.Articulacion == 0) {
        this.repeticionArticulacion = 'Se observo Articulacion Normal'
      }
      if (Repeticion.Articulacion == 1) {
        this.repeticionArticulacion = 'Se observo Articulacion Alterada: Errores Fonéticos'
      }
    } else {
      this.repeticionArticulacion = 'No se cargaron observaciones en Articulacion'
    }
    if (Repeticion.CodificacionFonologica != null) {
      if (Repeticion.CodificacionFonologica == 0) {
        this.repeticionCodificacionFonologica = 'Se observo Codificación Fonológica Normal'
      }
      if (Repeticion.CodificacionFonologica == 1) {
        this.repeticionCodificacionFonologica = 'Se observo las siguientes alteraciones en la Codificación Fonológica'
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
      if (Repeticion.ProcesamientoLexico == 0) {
        this.repeticionProcesamientoLexico = 'Se observo Procesamiento Léxico Normal'
      }
      if (Repeticion.ProcesamientoLexico == 1) {
        this.repeticionProcesamientoLexico = 'Se observo las siguientes alteraciones en el Procesamiento Léxico:'
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
      if (Repeticion.ProcesamientoSintaxtico == 0) {
        this.repeticionProcesamientoSintaxtico = 'Se observo Procesamiento Sintáctico Normal'
      }
      if (Repeticion.ProcesamientoSintaxtico == 1) {
        this.repeticionProcesamientoSintaxtico = 'Se observo Alterado el Procesamiento Sintáctico: Agramatismos'
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
      if (denominacion.Articulacion == 0) {
        this.denominacionArticulacion = 'Se observo Articulacion Normal'
      }
      if (denominacion.Articulacion == 1) {
        this.denominacionArticulacion = 'Se observo Articulacion Alterada: Errores Fonéticos'
      }
    } else {
      this.denominacionArticulacion = 'No se cargaron observaciones en Articulacion'
    }
    if (denominacion.CodificacionFonologica != null) {
      if (denominacion.CodificacionFonologica == 0) {
        this.denominacionCodificacionFonologica = 'Se observo Codificación Fonológica Normal'
      }
      if (denominacion.CodificacionFonologica == 1) {
        this.repeticionCodificacionFonologica = 'Se observo alteraciones en la Codificación Fonológica: Errores Fonemicos'
      }
    } else {
      this.oralProsodia = '<No se cargaron observaciones en Codificación Fonológica>'
    }
    if (denominacion.ProcesamientoLexico != null) {
      if (denominacion.ProcesamientoLexico == 0) {
        this.denominacionProcesamientoLexico = 'Se observo Procesamiento Léxico Normal'
      }
      if (denominacion.ProcesamientoLexico == 1) {
        this.denominacionProcesamientoLexico = 'Se observo las siguientes alteraciones en el Procesamiento Léxico:'
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
      if (Lectura.ComprensionDeComandoEscrito == 0) {
        this.lecturaComprensionComandoEscrito = 'Se observo Comprension de Comando Escrito Normal'
      }
      if (Lectura.ComprensionDeComandoEscrito == 1) {
        this.lecturaComprensionComandoEscrito = 'Se observaron las siguientes Alteraciones en la Comprension de Comandos Escritos:'
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
      if (Lectura.LecturaDeNoPalabras == 0) {
        this.lecturaLecturaNoPalabras = 'Se observo Lectura de No Palabras Normal'
      }
      if (Lectura.LecturaDeNoPalabras == 1) {
        this.lecturaLecturaNoPalabras = 'Se observo las siguientes alteraciones en la Lectura de No Palabras'
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
      if (Lectura.LecturaDePalabras == 0) {
        this.lecturaLecturaPalabras = 'Se observo Lectura de Palabras Normal'
      }
      if (Lectura.LecturaDePalabras == 1) {
        this.lecturaLecturaPalabras = 'Se observo las siguientes alteraciones en la Lectura de Palabras:'
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
      if (Lectura.EmparejamientoPalabraEscritaDibujo == 0) {
        this.lecturaEmparejamientoPalabraEscrita = 'Se observo Emparejamiento de palabra escrita con dibujo Normal'
      }
      if (Lectura.EmparejamientoPalabraEscritaDibujo == 1) {
        this.lecturaEmparejamientoPalabraEscrita = 'Se observo las siguientes alteraciones en el Emparejamiento de palabra escrita con dibujo:'
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
      if (Escritura.MovilidadDeLaManoDominante == 0) {
        this.escrituraMovilidadManoDominante = 'Se observo Escritura Mano Dominante Normal'
      }
      if (Escritura.MovilidadDeLaManoDominante == 1) {
        this.escrituraMovilidadManoDominante = 'Se observaron las siguientes Alteraciones en la Movilidad de la mano dominante:'
        if (Escritura.MMDPlejia) {
          this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante + '<Plejia>'
        }
        if (Escritura.MMDParesiaDeLaManoDominante) {
          this.escrituraMovilidadManoDominante = this.escrituraMovilidadManoDominante + '<Parecia De La Mano Dominante>'
        }
      }
    } else {
      this.escrituraMovilidadManoDominante = 'No se cargaron observaciones en Movilidad Mano Dominante'
    }
    if (Escritura.Deletreo != null) {
      if (Escritura.Deletreo == 0) {
        this.escrituraDeletreo = 'Se observo Deletreo Normal'
      }
      if (Escritura.Deletreo == 1) {
        this.escrituraDeletreo = 'Se observaron las siguientes Alteraciones en la Movilidad de la mano dominante:'
        if (Escritura.DAdicionDeLetrasQueResultanEnNoPalabra) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Adición de letras que resultan en no palabra>'
        }
        if (Escritura.DOmision) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Omisión>'
        }
        if (Escritura.DSustitucion) {
          this.escrituraDeletreo = this.escrituraDeletreo + '<Sustitución>'
        }
      }
    } else {
      this.escrituraDeletreo = 'No se cargaron observaciones en Deletreo'
    }
    if (Escritura.Ortografia != null) {
      if (Escritura.Ortografia == 0) {
        this.escrituraOrtografia = 'Se observo Ortografía Normal'
      }
      if (Escritura.Ortografia == 1) {
        this.escrituraOrtografia = 'Se observaron las siguientes Alteraciones en la Ortografía:'
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
