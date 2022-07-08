function calcular(inicio) {
  var finCurso = new Date();
  finCurso = inicio;

  var clases = 1;

  while (clases < 49) {
    if (diaDeCursado(finCurso)) {
      if (feriados(finCurso)) {
        if (vacaciones(finCurso)) {
          if (document.getElementById("informe") != null) {
            informe(clases, finCurso);
          } else if (document.getElementById("informeClient") != null) {
            informeClient(clases, finCurso);
          } else {
            informeResumido(clases, finCurso);
          }
          clases++;
        }
      }
    }
    finCurso.setDate(finCurso.getDate() + 1);
  }
  titulos();
}

function informe(clases, fecha) {
  var tabla = document.getElementById("eventos");

  switch (clases) {
    //Módulo 1
    case 1:
      crearFilaQA(tabla, clases, fecha, "T1 - Introducción a QC-QA", "M 1", 6);
      break;
    case 2:
      crearFila(tabla, clases, fecha, "T2 - Desarrollo de software 1");
      break;
    case 3:
      crearFila(tabla, clases, fecha, "T3 - Desarrollo de software 2");
      break;
    case 4:
      crearFila(
        tabla,
        clases,
        fecha,
        "T4 - ¿Qué es el testing? Necesidad de las pruebas"
      );
      break;
    case 5:
      crearFila(tabla, clases, fecha, "Extra - Herramientas de Observación");
      break;
    case 6:
      crearFila(tabla, clases, fecha, "Integrador + Día desafíos");
      break;
    //Módulo 2
    case 7:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T5 - Principios y ciclo de vida de testing 1<br>7 pp de las pruebas. Severidad vs Gravedad",
        "M 2",
        12
      );
      break;
    case 8:
      crearFila(
        tabla,
        clases,
        fecha,
        "T6 - Principios y ciclo de vida de testing 2<br>Ciclo vs Ciclo. Sólo nombramos las etapas. Entregables."
      );
      break;
    case 9:
      crearFila(
        tabla,
        clases,
        fecha,
        "T7 - Plan de Prueba 1<br>Analisis de requrimientos"
      );
      break;
    case 10:
      crearFila(
        tabla,
        clases,
        fecha,
        "T8 - Plan de Prueba 2<br>Planificación y diseño de pruebas"
      );
      break;
    case 11:
      crearFila(tabla, clases, fecha, "T9 - Historia de usuario");
      break;
    case 12:
      crearFila(tabla, clases, fecha, "T10 - Casos de prueba 1");
      break;
    case 13:
      crearFila(tabla, clases, fecha, "T11 - Casos de prueba 2");
      break;
    case 14:
      crearFila(tabla, clases, fecha, "Día desafíos");
      break;
    case 15:
      crearFila(tabla, clases, fecha, "T12 - Metodologías - Kanvan");
      break;
    case 16:
      crearFila(tabla, clases, fecha, "T13 - Metodologías - Scrum");
      break;
    case 17:
      crearFila(tabla, clases, fecha, "T14 - Testing Agil");
      break;
    case 18:
      crearFila(tabla, clases, fecha, "Integrador + Día desafíos");
      break;
    //Módulo 3
    case 19:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T15 - Herramientas para gestión de pruebas<br>Trello",
        "M 3",
        13
      );
      break;
    case 20:
      crearFila(
        tabla,
        clases,
        fecha,
        "T16 - Herramientas para gestión de pruebas<br>Test-link"
      );
      break;
    case 21:
      crearFila(
        tabla,
        clases,
        fecha,
        "T16 - Herramientas para gestión de pruebas"
      );
      break;
    case 22:
      crearFila(tabla, clases, fecha, "T17 - Ejecución de las pruebas");
      break;
    case 23:
      crearFila(tabla, clases, fecha, "T17 - Ejecución de las pruebas");
      break;
    case 24:
      crearFila(tabla, clases, fecha, "T17 - Ejecución de las pruebas");
      break;
    case 25:
      crearFila(tabla, clases, fecha, "T18 - Reporte de errores");
      break;
    case 26:
      crearFila(tabla, clases, fecha, "T18 - Reporte de errores");
      break;
    case 27:
      crearFila(tabla, clases, fecha, "Día de Desafios");
      break;
    case 28:
      crearFila(tabla, clases, fecha, "T19 - Testing mobile");
      break;
    case 29:
      crearFila(tabla, clases, fecha, "T19 - Testing mobile");
      break;
    case 30:
      crearFila(tabla, clases, fecha, "T20 - Ambiente de prueba");
      break;
    case 31:
      crearFila(tabla, clases, fecha, "Integrador + Día desafíos");
      break;
    //Módulo 4
    case 32:
      crearFilaQA(tabla, clases, fecha, "T21 - Niveles de pruebas", "M 4", 8);
      break;
    case 33:
      crearFila(tabla, clases, fecha, "T22 - Tipos de pruebas");
      break;
    case 34:
      crearFila(tabla, clases, fecha, "T22 - Tipos de pruebas");
      break;
    case 35:
      crearFila(tabla, clases, fecha, "T22 - Tipos de pruebas");
      break;
    case 36:
      crearFila(tabla, clases, fecha, "T23 - Técnicas de pruebas");
      break;
    case 37:
      crearFila(tabla, clases, fecha, "T23 - Técnicas de pruebas");
      break;
    case 38:
      crearFila(tabla, clases, fecha, "T24 - Usabilidad");
      break;
    case 39:
      crearFila(tabla, clases, fecha, "Integrador + Día desafíos");
      break;
    //Módulo 5
    case 40:
      crearFilaQA(tabla, clases, fecha, "T25 - Equipo de prueba", "M 5", 4);
      break;
    case 41:
      crearFila(
        tabla,
        clases,
        fecha,
        "T26 - Planificación de prueba (estimacion de esfuerzo)"
      );
      break;
    case 42:
      crearFila(tabla, clases, fecha, "T27 - Base de datos");
      break;
    case 43:
      crearFila(tabla, clases, fecha, "Integrador + Día desafíos");
      break;
    //Módulo Pre Exámen
    case 44:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "Pre Exámen - Repaso de todo el curso",
        "Pre Exámen",
        4
      );
      break;
    case 45:
      crearFila(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso");
      break;
    case 46:
      crearFila(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso");
      break;
    case 47:
      crearFila(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso");
      break;
    case 48:
      crearFilaQA(tabla, clases, fecha, "Exámen Final", "Final", 1);
      break;
    default:
      break;
  }
}

function informeClient(clases, fecha) {
  var tabla = document.getElementById("eventos");

  switch (clases) {
    //Módulo 1
    case 1:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T1 - Introducción a QC-QA",
        "QA1_M1",
        6, "Día 1: D_1 no está vacío<br>Firmar los terminos y condiciones<br>¿Comprendiste los 3 pasos para acceder a tu clase?"
      );
      break;
    case 2:
      crearFilaClient(tabla, clases, fecha, "T2 - Desarrollo de software 1", "QA1_Modulo1 no está vacío<br>Firmar los términos y condiciones<br>¿Comprendiste los 3 pasos para acceder a tu clase?<br>Ver M1-T2 - ¿Pudiste realizar las actividades del Primer Día?<br>Día 2: D_2 no está vacío (si no, ocultado)");
      break;
    case 3:
      crearFilaClient(tabla, clases, fecha, "T3 - Desarrollo de software 2", "M1-T2 - ¿Lograste los objetivos de la Guía?<br>Su QA1_Modulo1 no está vacío<br>Su Día 3: D_3 no está vacío");
      break;
    case 4:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T4 - ¿Qué es el testing? Necesidad de las pruebas", "Su QA1_Modulo1 no está vacío<br>M1 T3 - ¿Lograste los objetivos de la Guía?<br>Su Día 4: D_4 no está vacío"
      );
      break;
    case 5:
      crearFilaClient(tabla, clases, fecha, "Extra - Herramientas de Observación", "Su QA1_Modulo1 no está vacío (si no, ocultado)<br>M1 T4 - ¿Lograste los objetivos de la Guía?<br>Su Día 5: D_5 no está vacío (si no, ocultado)");
      break;
    case 6:
      crearFilaClient(tabla, clases, fecha, "Integrador + Día desafíos", "Su QA1_Modulo1 no está vacío Su Día 6: D_6 no está vacío M1 T4 - ¿Lograste los objetivos de la Guía?");
      break;
    //Módulo 2
    case 7:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T5 - Principios y ciclo de vida de testing 1<br>7 pp de las pruebas. Severidad vs Gravedad",
        "QA1_M2",
        12, 
        "Fin M1- ¿Cómo te fue en este fin de módulo?<br>Su QA1_Modulo2 no está vacío<br>Su Día 7: D_7 no está vacío"
      );
      break;
    case 8:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T6 - Principios y ciclo de vida de testing 2<br>Ciclo vs Ciclo. Sólo nombramos las etapas. Entregables.",
        "La actividad M2 T5 - ¿Lograste los objetivos de la Guía?<br>Su Día 8: D_8 no está vacío (si no, ocultado)"
      );
      break;
    case 9:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T7 - Plan de Prueba 1<br>Analisis de requrimientos",
        "La actividad M2 T6 - ¿Lograste los objetivos de la Guía?<br>Su Día 9: D_9 no está vacío (si no, ocultado)"
      );
      break;
    case 10:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T8 - Plan de Prueba 2<br>Planificación y diseño de pruebas",
        "La actividad M2 T7 - ¿Lograste los objetivos de la Guía?<br>Su Día 10: D_10 no está vacío (si no, ocultado)"
      );
      break;
    case 11:
      crearFilaClient(tabla, clases, fecha, "T9 - Historia de usuario",
      "La actividad M2 T8 - ¿Lograste los objetivos de la Guía?<br>Su Día 11: D_11 no está vacío");
      break;
    case 12:
      crearFilaClient(tabla, clases, fecha, "T10 - Casos de prueba 1",
      "La actividad M2 T9 - ¿Lograste los objetivos de la Guía?<br>Su Día 12: D_12 no está vacío");
      break;
    case 13:
      crearFilaClient(tabla, clases, fecha, "T11 - Casos de prueba 2", 
      "La actividad M2 T10 - ¿Lograste los objetivos de la Guía?<br>Su Día 13: D_13 no está vacío");
      break;
    case 14:
      crearFilaClient(tabla, clases, fecha, "Día desafíos",
      "La actividad M2 T11 - ¿Lograste los objetivos de la Guía?<br>Su Día 14: D_14 no está vacío"
      );
      break;
    case 15:
      crearFilaClient(tabla, clases, fecha, "T12 - Metodologías - Kanvan",
      "La actividad M2 Desafio - ¿Lograste los objetivos de la Guía?<br>Su Día 15: D_15 no está vacío");
      break;
    case 16:
      crearFilaClient(tabla, clases, fecha, "T13 - Metodologías - Scrum",
      "La actividad M2 T12 - ¿Lograste los objetivos de la Guía?<br>Su Día 16: D_16 no está vacío");
      break;
    case 17:
      crearFilaClient(tabla, clases, fecha, "T14 - Testing Agil", 
      "La actividad M2-T13 - ¿Lograste los objetivos de la Guía?<br>Su Día 17: D_17 no está vacío");
      break;
    case 18:
      crearFilaClient(tabla, clases, fecha, "Integrador + Día desafíos",
      "La actividad M2-T14 - ¿Lograste los objetivos de la Guía?<br>Su Día 18: D_18 no está vacío");
      break;
    //Módulo 3
    case 19:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T15 - Herramientas para gestión de pruebas<br>Trello",
        "QA1_M3",
        13,
        "La actividad Fin M2- ¿Cómo te fue en este fin de módulo?<br>Su Día 19: D_19 no está vacío");
      break;
    case 20:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T16 - Herramientas para gestión de pruebas 1<br>Test-link",
        "La actividad M3-T15 - ¿Lograste los objetivos de la Guía?<br>Su Día 20: D_20 no está vacío");
      break;
    case 21:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T16 - Herramientas para gestión de pruebas 2",
        "La actividad M3-T16.1 - ¿Lograste los objetivos de la Guía?<br>Su Día 21: D_21 no está vacío");
      break;
    case 22:
      crearFilaClient(tabla, clases, fecha, "T17 - Ejecución de las pruebas 1",
      "La actividad M3-T16.2 - ¿Lograste los objetivos de la Guía? <br>Su Día 22: D_22 no está vacío");
      break;
    case 23:
      crearFilaClient(tabla, clases, fecha, "T17 - Ejecución de las pruebas 2",
      "La actividad M3-T17.1 - ¿Lograste los objetivos diarios de la Guía?<br>Su Día 23: D_23 no está vacío");
      break;
    case 24:
      crearFilaClient(tabla, clases, fecha, "T17 - Ejecución de las pruebas 3",
      "La actividad M3-T17.2 - ¿Lograste los objetivos de la Guía?<br>Su Día 24: D_24 no está vacío ");
      break;
    case 25:
      crearFilaClient(tabla, clases, fecha, "T18 - Reporte de errores 1",
      "La actividad M3-T17.3 - ¿Lograste los objetivos de la Guía?<br>Su Día 25: D_25 no está vacío");
      break;
    case 26:
      crearFilaClient(tabla, clases, fecha, "T18 - Reporte de errores 2",
      "La actividad M3-T18.1 - ¿Lograste los objetivos de la Guía?<br>Su Día 26: D_26 no está vacío");
      break;
    case 27:
      crearFilaClient(tabla, clases, fecha, "Día de Desafios",
      "La actividad M3-T18.2 - ¿Lograste los objetivos de la Guía?<br>Su Día 27: D_27 no está vacío ");
      break;
    case 28:
      crearFilaClient(tabla, clases, fecha, "T19 - Testing mobile 1",
      "La actividad M3 Desafio - ¿Lograste los objetivos de la Guía?<br>Su Día 28: D_28 no está vacío");
      break;
    case 29:
      crearFilaClient(tabla, clases, fecha, "T19 - Testing mobile 2",
      "La actividad M3-19.1 - ¿Lograste los objetivos de la Guía?<br>Su Día 29: D_29 no está vacío");
      break;
    case 30:
      crearFilaClient(tabla, clases, fecha, "T20 - Ambiente de prueba",
      "La actividad M3-T19.2 - ¿Lograste los objetivos de la Guía?<br>Su Día 30: D_30 no está vacío");
      break;
    case 31:
      crearFilaClient(tabla, clases, fecha, "Integrador + Día desafíos",
      "La actividad M3-20 - ¿Lograste los objetivos de la Guía?<br>Su Día 31: D_31 no está vacío");
      break;
    //Módulo 4
    case 32:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T21 - Niveles de pruebas",
        "QA1_M4",
        8,
        "La actividad Fin M3- ¿Cómo te fue en este fin de módulo?<br>Su Día 32: D_32 no está vacío "
      );
      break;
    case 33:
      crearFilaClient(tabla, clases, fecha, "T22 - Tipos de pruebas 1",
      "La actividad M4-T21 - ¿Lograste los objetivos de la Guía?<br>Su Día 33: D_33 no está vacío");
      break;
    case 34:
      crearFilaClient(tabla, clases, fecha, "T22 - Tipos de pruebas 2",
      "La actividad M4-T22.1 - ¿Lograste los objetivos de la Guía?<br>Su Día 34: D_34 no está vacío");
      break;
    case 35:
      crearFilaClient(tabla, clases, fecha, "T22 - Tipos de pruebas 3",
      "La actividad M4-T22.2 - ¿Lograste los objetivos de la Guía?<br>Su Día 35: D_35 no está vacío");
      break;
    case 36:
      crearFilaClient(tabla, clases, fecha, "T23 - Técnicas de revisión 1",
      "La actividad M4-22.3 - ¿Lograste los objetivos de la Guía?<br>Su Día 36: D_36 no está vacío");
      break;
    case 37:
      crearFilaClient(tabla, clases, fecha, "T23 - Técnicas de revisión 2",
      "La actividad M4-T23.1 - ¿Lograste los objetivos de la Guía?<br>Su Día 37: D_37 no está vacío");
      break;
    case 38:
      crearFilaClient(tabla, clases, fecha, "T24 - Usabilidad",
      "La actividad M4-T24 - ¿Lograste los objetivos de la Guía?<br>Su Día 39: D_39 no está vacío");
      break;
    case 39:
      crearFilaClient(tabla, clases, fecha, "Integrador + Día desafíos",
      "La actividad M4-T24 - ¿Lograste los objetivos de la Guía?<br>Su Día 39: D_39 no está vacío");
      break;
    //Módulo 5
    case 40:
      crearFilaQA(tabla, clases, fecha, "T25 - Equipo de prueba", "QA1_M5", 4, "");
      break;
    case 41:
      crearFilaClient(
        tabla,
        clases,
        fecha,
        "T26 - Planificación de prueba (estimacion de esfuerzo)", ""
      );
      break;
    case 42:
      crearFilaClient(tabla, clases, fecha, "T27 - Base de datos", "");
      break;
    case 43:
      crearFilaClient(tabla, clases, fecha, "Integrador + Día desafíos", "");
      break;
    //Módulo Pre Exámen
    case 44:
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "Pre Exámen - Repaso de todo el curso",
        "QA1_pre_examen",
        4, ""
      );
      break;
    case 45:
      crearFilaClient(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso 1", "");
      break;
    case 46:
      crearFilaClient(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso 2", "");
      break;
    case 47:
      crearFilaClient(tabla, clases, fecha, "Pre Exámen - Repaso de todo el curso 3", "");
      break;
    case 48:
      crearFilaQA(tabla, clases, fecha, "Exámen Final", "QA1_examen", 1, "");
      break;
    default:
      break;
  }
}

function informeResumido(clases, fecha) {
  if (clases == 48) {
    document.getElementById(
      "informeResumido"
    ).textContent = `Tu fecha de Exámen Final es el: `;
    document.getElementById("dateFinal").textContent = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;
    document.getElementById("informeResumido").style.padding =
      "15px 0px 7px 0px";
    document.getElementById("dateFinal").style.padding = "0px 0px 7px 0px";
  }
}

function titulos() {
  let encabezado = document.getElementById("table-header");
  let th4 = document.createElement("th");
  encabezado.append(th4);
  th4.style.backgroundColor = "#ffcb00";
  th4.scope = "col";
  let titulos = document.getElementsByTagName("th");
  if (document.getElementById("informeClient") == null) {
    titulos[0].textContent = "Módulo";
  } else {
    titulos[0].textContent = "Restricción de Perfil";
  }

  titulos[1].textContent = "Día";
  titulos[2].textContent = "Fecha";
  titulos[3].textContent = "Contenido";

  //delete last 2 columns
  titulos[5].remove();
}

function crearFilaQA(tabla, clases, fecha, contenido, modulo, span, restriccion) {
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  var row = tabla.insertRow(-1);
  var celda4 = row.insertCell(0);
  var celda1 = row.insertCell(1);
  var celda2 = row.insertCell(2);
  var celda3 = row.insertCell(3);
  let grises = ["M 2", "M 4", "Pre Exámen", "QA1_M1", "QA1_M3", "QA1_M5", "QA1_examen"];
  
  celda1.innerHTML = clases;
  celda2.innerHTML = dia + "/" + mes + "/" + anio;
  celda3.innerHTML = contenido;
  celda4.innerHTML = modulo;
  celda4.rowSpan = span;

  if (document.getElementById("informeClient") != null) {
    var celda5 = row.insertCell(4);
    celda5.innerHTML = restriccion;
  }

  if (
    grises.includes(celda4.textContent)
  ) {
    celda4.style.backgroundColor = "#F0F1F4";
  } else {
    celda4.style.backgroundColor = "white";
  }
}

function crearFila(tabla, clases, fecha, contenido) {
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  var row = tabla.insertRow(-1);
  var celda1 = row.insertCell(0);
  var celda2 = row.insertCell(1);
  var celda3 = row.insertCell(2);
  celda1.innerHTML = clases;
  celda2.innerHTML = dia + "/" + mes + "/" + anio;
  celda3.innerHTML = contenido;
}

function crearFilaClient(tabla, clases, fecha, contenido, restriccion) {
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  var row = tabla.insertRow(-1);
  var celda1 = row.insertCell(0);
  var celda2 = row.insertCell(1);
  var celda3 = row.insertCell(2);
  var celda4 = row.insertCell(3);
  celda1.innerHTML = clases;
  celda2.innerHTML = dia + "/" + mes + "/" + anio;
  celda3.innerHTML = contenido;
  celda4.innerHTML = restriccion;
}
