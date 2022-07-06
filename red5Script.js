function calcular(inicio) {
  var finCurso = new Date();
  finCurso = inicio;

  var clases = 1;

  while (clases < 105) {
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
    //PSEINT
    case 1:
      crearFilaRed5(tabla, clases, fecha, "Día 1 + Guía 1", "PseInt", 8);
      break;
    case 2:
      crearFila(tabla, clases, fecha, "Inicio Guía 2");
      break;
    case 4:
      crearFila(tabla, clases, fecha, "Repaso Guía 2");
      break;
    case 5:
      crearFila(tabla, clases, fecha, "Inicio Guía 3");
      break;
    case 8:
      crearFila(tabla, clases, fecha, "Repaso Guía 3");
      break;
    case 9:
      crearFila(tabla, clases, fecha, "Inicio Guía 4");
      break;
    case 13:
      crearFila(tabla, clases, fecha, "Repaso Guía 4");
      break;
    case 14:
      crearFila(tabla, clases, fecha, "Integrador PseInt");
      break;
    //JAVA
    case 15:
      crearFilaRed5(
        tabla,
        clases,
        fecha,
        "Inicio Java Intro",
        "Java + MySQL",
        15
      );
      break;
    case 21:
      crearFila(tabla, clases, fecha, "Repaso Java Intro");
      break;
    case 22:
      crearFila(tabla, clases, fecha, "Inicio POO");
      break;
    case 27:
      crearFila(tabla, clases, fecha, "Repaso 1 de POO");
      break;
    case 33:
      crearFila(tabla, clases, fecha, "Repaso 2 de POO");
      break;
    case 34:
      crearFila(tabla, clases, fecha, "Inicio Colecciones");
      break;
    case 39:
      crearFila(tabla, clases, fecha, "Repaso Colecciones");
      break;
    case 40:
      crearFila(tabla, clases, fecha, "Inicio Relaciones");
      break;
    case 45:
      crearFila(tabla, clases, fecha, "Repaso Relaciones");
      break;
    case 46:
      crearFila(tabla, clases, fecha, "Inicio Herencia");
      break;
    case 50:
      crearFila(tabla, clases, fecha, "Inicio Excepciones");
      break;
    case 52:
      crearFila(tabla, clases, fecha, "Repaso Herencia + Excepciones");
      break;
    case 53:
      crearFila(tabla, clases, fecha, "Inicio MySQL");
      break;
    case 57:
      crearFila(tabla, clases, fecha, "Repaso MySQL");
      break;
    case 58:
      crearFila(tabla, clases, fecha, "Integrador Java + MySQL + Git2");
      break;
    //BASE DE DATOS
    case 59:
      crearFilaRed5(
        tabla,
        clases,
        fecha,
        "Inicio JDBC",
        "Base de Datos con Java",
        3
      );
      break;
    case 62:
      crearFila(tabla, clases, fecha, "Inicio JPA");
      break;
    case 66:
      crearFila(tabla, clases, fecha, "Repaso JDBC + JPA");
      break;
    //FRONT 1
    case 67:
      crearFilaRed5(tabla, clases, fecha, "Inicio HTML + CSS", "Front 1", 3);
      break;
    case 70:
      crearFila(tabla, clases, fecha, "Inicio JS");
      break;
    case 75:
      crearFila(tabla, clases, fecha, "Repaso HTML + CSS + JS");
      break;
    //FullStack
    case 76:
      crearFilaRed5(tabla, clases, fecha, "Inicio Spring 1", "FullStack", 4);
      break;
    case 81:
      crearFila(tabla, clases, fecha, "Repaso Spring 1");
      break;
    case 82:
      crearFila(tabla, clases, fecha, "Inicio Spring 2");
      break;
    case 89:
      crearFila(tabla, clases, fecha, "Repaso Spring 2");
      break;
    //FRONT 2
    case 90:
      crearFilaRed5(tabla, clases, fecha, "Inicio React", "Front 2", 2);
      break;
    case 95:
      crearFila(tabla, clases, fecha, "Repaso React");
      break;
    //PYTHON
    case 96:
      crearFilaRed5(tabla, clases, fecha, "Inicio Python", "Python", 2);
      break;
    case 103:
      crearFila(tabla, clases, fecha, "Repaso Python");
      break;
    //FINAL
    case 104:
      crearFilaRed5(tabla, clases, fecha, "Evaluación Final", "Final", 1);
      break;
    default:
      break;
  }
}

function informeClient(clases, fecha) {
  var tabla = document.getElementById("eventos");

  switch (clases) {
    //PSEINT
    case 1:
      crearFilaClientVersion(tabla, clases, fecha, "Día 1 + Guía 1", "M1_G1");
      break;
    case 2:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Guía 2", "M1_G2_1");
      break;
    case 4:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Guía 2", "M1_G2_REPASO");
      break;
    case 5:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Guía 3", "M1_G3");
      break;
    case 8:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Guía 3", "M1_G3_REPASO");
      break;
    case 9:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Guía 4", "M1_G4");
      break;
    case 13:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Guía 4", "M1_G4_REPASO");
      break;
    case 14:
      crearFilaClientVersion(tabla, clases, fecha, "Integrador PseInt", "M1_INT");
      break;
    //JAVA
    case 15:
      crearFilaClientVersion(tabla,clases,fecha,"Inicio Java Intro","M2_G1");
      break;
    case 21:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Java Intro", "");
      break;
    case 22:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio POO", "M2_G2");
      break;
    case 27:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso 1 de POO", "");
      break;
      case 28:
      crearFilaClientVersion(tabla, clases, fecha, "Continuación POO", "M2_G3");
      break;
    case 33:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso 2 de POO", "");
      break;
    case 34:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Colecciones", "M2_G5");
      break;
    case 39:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Colecciones", "");
      break;
    case 40:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Relaciones", "M2_G6");
      break;
    case 45:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Relaciones", "");
      break;
    case 46:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Herencia", "M2_G7");
      break;
    case 50:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Excepciones", "M2_G8");
      break;
    case 52:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Herencia + Excepciones", "");
      break;
    case 53:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio MySQL", "M3_G1");
      break;
    case 57:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso MySQL", "");
      break;
    case 58:
      crearFilaClientVersion(tabla, clases, fecha, "Integrador Java + MySQL + Git2", "M2y3_INT");
      break;
    //BASE DE DATOS
    case 59:
      crearFilaClientVersion(tabla,clases,fecha,"Inicio JDBC","");
      break;
    case 62:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio JPA", "");
      break;
    case 66:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso JDBC + JPA", "");
      break;
    //FRONT 1
    case 67:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio HTML + CSS", "");
      break;
    case 70:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio JS", "");
      break;
    case 75:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso HTML + CSS + JS", "");
      break;
    //FullStack
    case 76:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Spring 1", "");
      break;
    case 81:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Spring 1", "");
      break;
    case 82:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Spring 2", "");
      break;
    case 89:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Spring 2", "");
      break;
    //FRONT 2
    case 90:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio React", "");
      break;
    case 95:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso React", "");
      break;
    //PYTHON
    case 96:
      crearFilaClientVersion(tabla, clases, fecha, "Inicio Python", "");
      break;
    case 103:
      crearFilaClientVersion(tabla, clases, fecha, "Repaso Python", "");
      break;
    //FINAL
    case 104:
      crearFilaClientVersion(tabla, clases, fecha, "Evaluación Final", "");
      break;
    default:
      break;
  }
}

function informeResumido(clases, fecha) {
  if (clases == 104) {
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
    titulos[1].textContent = "Día";
    titulos[2].textContent = "Fecha";
    titulos[3].textContent = "Contenido";
    titulos[4].remove();
    titulos[4].remove();
  }else{
    titulos[0].textContent = "Día";
    titulos[1].textContent = "Fecha";
    titulos[2].textContent = "Contenido";
    titulos[3].textContent = "Nomenclatura HCA para liberar contenido";
    titulos[4].remove();
    let x = document.getElementsByTagName('tr');
    for (let name of x) {
        name.deleteCell(-1);
    }
  }


}

function crearFilaRed5(tabla, clases, fecha, contenido, modulo, span) {
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
    celda4.textContent == "PseInt" ||
    celda4.textContent == "Base de Datos con Java" ||
    celda4.textContent == "FullStack" ||
    celda4.textContent == "Python"
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
