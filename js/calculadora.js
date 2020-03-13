function calcular( tipo, valor ) {

    var resultado = document.getElementById('resultado')
    
    if( tipo === 'acao' ) {

        if( valor === "c" ) {
            resultado.value = ''
        }

        if( valor === "+" || valor === "-" || valor === "*" || valor === "/" ) {
            resultado.value += " " + valor + " "
        }

        if( valor === "." ) {
            resultado.value += valor
        }

        if( valor === "=" ) {
            var valorCampo = resultado.value
            resultado.value = eval(valorCampo)
        }

    } else if( tipo === 'valor' ) {
        resultado.value += valor
    }

}