function calcular(inicio) {
  var finCurso = new Date();
  finCurso = inicio;

  var clases = 1;

  document.getElementById("estado").textContent = "";

  while (clases < 28) {
    if (diaDeCursado(finCurso)) {
      if (feriados(finCurso)) {
        if (vacaciones(finCurso)) {
          if (document.getElementById("informeResumido") != null) {
            informe(clases, finCurso);
            informeResumido(clases, finCurso);
          } else if (document.getElementById("informeClient") != null) {
            informeClient(clases, finCurso);
          } else {
            informe(clases, finCurso);
          }
          clases++;
        }
      }
    }
    finCurso.setDate(finCurso.getDate() + 1);
  }
}

function informe(clases, fecha) {
  var tabla = document.getElementById("eventos");
  switch (clases) {
    case 1:
      crearFila(tabla, clases, fecha, "OnBoarding");
      break;
    case 2:
      crearFila(tabla, clases, fecha, "Inicio Guía 1");
      break;
    case 4:
      crearFila(tabla, clases, fecha, "Inicio Guía 2.1");
      break;
    case 7:
      crearFila(tabla, clases, fecha, "Inicio Guía 2.2");
      break;
    case 12:
      crearFila(tabla, clases, fecha, "Inicio Guía 3");
      break;
    case 17:
      crearFila(tabla, clases, fecha, "Inicio Guía 4");
      break;
    case 27:
      crearFila(tabla, clases, fecha, "Integrador PseInt");
      break;
    default:
      break;
  }
}

function informeClient(clases, fecha) {
  //agregando las columnas
  let tabla = document.getElementById("eventos");

  //agregar las filas
  switch (clases) {
    case 1:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "OnBoarding",
        "D_1: ok",
        "Firmar Términos y Condiciones esté marcada como realizada <br> ¿Comprendiste los 3 pasos para acceder a tu clase?"
      );
      break;
    case 2:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 1",
        "Día 2: D_2: ok",
        "Firmar Términos y Condiciones esté marcada como realizada <br> ¿Comprendiste los 3 pasos para acceder a tu clase?"
      );
      break;
    case 4:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 2.1",
        "Modulo1_Guia2.1_PSeInt: ok",
        "La actividad 1 - ¿Pudiste resolver todos los ejercicios fundamentales de la Guía 1 PSeInt? esté marcada como realizada <br> La actividad 1. ¿Lograste los objetivos de la Guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 7:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 2.2",
        "Modulo1_Guia2.2_PSeInt: ok",
        "2.1 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 11:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Guía 2",
        "Modulo1_Guia2_RepasoPSeInt: ok",
        "Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 12:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 3",
        "Modulo1_Guia3_PSeInt: ok",
        "2.2 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> 2. ¿Lograste los objetivos de la Guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 17:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Guía 3",
        "Modulo1_Guia3_RepasoPSeInt: ok",
        ""
      );
      break;
    case 18:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 4",
        "Modulo1_Guia4_PSeInt: ok",
        "3 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> 3. ¿Lograste los objetivos de la Guía? esté marcada como realizada"
      );
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Contenido Plus: ¿Cómo utilizar correctamente Google?",
        "Modulo1_Guia4_PSeInt: ok",
        ""
      );
      break;
    case 26:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Arreglos",
        "Modulo1_Guia4_RepasoPSeInt: ok",
        ""
      );
      break;
    case 27:
      crearFilaClientVersion(tabla, clases, fecha, "Integrador PseInt", "", "");
      break;
    default:
      break;
  }
}

function informeResumido(clases, fecha) {
  let today = new Date();
  if (today.getDate() == fecha.getDate()) {
    document.getElementById("estado").textContent = "";
    document.getElementById("estado").textContent = estadoActual(clases, fecha);
  }


  if (clases == 27) {
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

function estadoActual(clases, fecha) {

  let guia;
  let dia;
console.log(clases);
  
    if (clases == 1) {
      guia = "de OnBoarding";
      dia = "";
    } else if (clases >= 2 && clases <= 3) {
      guia = "de la Guía 1";
      dia = clases - 2 + 1;
    } else if (clases >= 4 && clases <= 6) {
      guia = "de la Guía 2.1";
      dia = clases - 4 + 1;
    } else if (clases >= 7 && clases <= 11) {
      guia = "de la Guía 2.2";
      dia = clases - 7 + 1;
    } else if (clases >= 12 && clases <= 17) {
      guia = "de la Guía 3";
      dia = clases - 12 + 1;
    } else if (clases >= 18 && clases <= 26) {
      guia = "de la Guía 4";
      dia = clases - 18 + 1;
    }

    if (clases == 27) {
      return "";
    }else{
      return `Estás en tu día ${dia} ${guia}`;
    }
  
  
}

