function calcular(inicio) {

    var finCurso = new Date();
    finCurso = inicio;

    var clases = 1;

    while (clases < 160) {
        if (diaDeCursado(finCurso)) {
            if (feriados(finCurso)) {
                if (vacaciones(finCurso)) {
                    if (document.getElementById("informe") != null) {
                        informe(clases, finCurso);
                    }else{
                    informeResumido(clases, finCurso);
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
      case 3:
        crearFila(tabla, clases, fecha, "Repaso Guía 1");
        break;
      case 11:
        crearFila(tabla, clases, fecha, "Repaso Guía 2");
        break;
      case 17:
        crearFila(tabla, clases, fecha, "Repaso Guía 3");
        break;
      case 26:
        crearFila(tabla, clases, fecha, "Repaso PseInt");
        break;
      case 27:
        crearFila(tabla, clases, fecha, "Integrador PseInt");
        break;
      case 28:
        crearFila(tabla, clases, fecha, "Git primera parte");
        break;
      case 38:
        crearFila(tabla, clases, fecha, "Repaso Java Intro");
        break;
      case 47:
        crearFila(tabla, clases, fecha, "Repaso POO 1º Parte");
        break;
      case 58:
        crearFila(tabla, clases, fecha, "Repaso POO 2ºParte");
        break;
      case 67:
        crearFila(tabla, clases, fecha, "Repaso Colecciones");
        break;
      case 76:
        crearFila(tabla, clases, fecha, "Repaso Relaciones");
        break;
      case 85:
        crearFila(tabla, clases, fecha, "Repaso Herencia");
        break;
      case 88:
        crearFila(tabla, clases, fecha, "Repaso Excepciones");
        break;
      case 97:
        crearFila(tabla, clases, fecha, "Repaso MySQL");
        break;
      case 98:
        crearFila(tabla, clases, fecha, "Integrador Java + MySQL");
        break;
      case 102:
        crearFila(tabla, clases, fecha, "Repaso JDBC");
        break;
      case 110:
        crearFila(tabla, clases, fecha, "Repaso JPA");
        break;
      case 111:
        crearFila(tabla, clases, fecha, "Git segunda parte");
        break;
      case 117:
        crearFila(tabla, clases, fecha, "Repaso HTML y CSS");
        break;
      case 125:
        crearFila(tabla, clases, fecha, "Repaso JavaScript");
        break;
      case 134:
        crearFila(tabla, clases, fecha, "Repaso 1 de Spring");
        break;
      case 140:
        crearFila(tabla, clases, fecha, "Repaso 2 de Spring");
        break;
      case 146:
        crearFila(tabla, clases, fecha, "Repaso 3 de Spring");
        break;
      case 157:
        crearFila(tabla, clases, fecha, "Repaso React");
        break;
      case 158:
        crearFila(tabla, clases, fecha, "Repaso de Curso");
        break;
      case 159:
        crearFila(tabla, clases, fecha, "Integrador Final");
        break;
      default:
        break;
    }
}

function informeResumido(clases, fecha) {
    if (clases == 159) {
     document.getElementById("informeResumido").textContent = `Tu fecha de Exámen Final es el: `;
     document.getElementById("dateFinal").textContent = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
     document.getElementById("informeResumido").style.padding = "15px 0px 7px 0px"
     document.getElementById("dateFinal").style.padding = "0px 0px 7px 0px"
    }
}
