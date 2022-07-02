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
        6
      );
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
        "QA1_M2",
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
        "QA1_M3",
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
      crearFilaQA(
        tabla,
        clases,
        fecha,
        "T21 - Niveles de pruebas",
        "QA1_M4",
        8
      );
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
      crearFilaQA(tabla, clases, fecha, "T25 - Equipo de prueba", "QA1_M5", 4);
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
        "QA1_pre_examen",
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
      crearFilaQA(tabla, clases, fecha, "Exámen Final", "QA1_examen", 1);
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
  titulos[4].remove();
  titulos[4].remove();
}

function crearFilaQA(tabla, clases, fecha, contenido, modulo, span) {
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  var row = tabla.insertRow(-1);
  var celda4 = row.insertCell(0);
  var celda1 = row.insertCell(1);
  var celda2 = row.insertCell(2);
  var celda3 = row.insertCell(3);
  celda1.innerHTML = clases;
  celda2.innerHTML = dia + "/" + mes + "/" + anio;
  celda3.innerHTML = contenido;
  celda4.innerHTML = modulo;
  celda4.rowSpan = span;
  if (
    celda4.textContent == "M 2" ||
    celda4.textContent == "M 4" ||
    celda4.textContent == "Pre Exámen"
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
