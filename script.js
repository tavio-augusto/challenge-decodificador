const caixaEntrada = document.querySelector(".caixa-de-entrada");
const saidaTexto = document.querySelector(".saida-texto");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botaoCriptografar() {
    const textoEncriptado = criptografar(caixaEntrada.value);
    saidaTexto.value = textoEncriptado;
    caixaEntrada = "";
}

function criptografar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function botaoDescriptografar() {
    const textoDesencriptado = descriptografar(caixaEntrada.value);
    saidaTexto.value = textoDesencriptado;
    caixaEntrada = "";
}

function descriptografar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiar() {
    var texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
}

/*function copiar() {
	var copyText = document.querySelector(".resultado");
	var textToCopy = copyText.value;
  
	navigator.clipboard.writeText(textToCopy);
  } 

var mensagemTextArea = document.querySelector(".resultado");
*/

function validarInput(input) {
	input.value = input.value.replace(/[A-Za-z0-9]/g, '');
  }
