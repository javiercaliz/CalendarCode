function calcular(inicio) {

    var finCurso = new Date();
    finCurso = inicio;

    var clases = 1;

    while (clases < 28) {
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
      default:
        break;
    }
}

function informeResumido(clases, fecha) {
    if (clases == 27) {
     document.getElementById("informeResumido").textContent = `Tu fecha de Exámen Final es el: `;
     document.getElementById("dateFinal").textContent = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
     document.getElementById("informeResumido").style.padding = "15px 0px 7px 0px"
     document.getElementById("dateFinal").style.padding = "0px 0px 7px 0px"
    }
}
