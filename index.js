
function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui
    if (numero % 2 === 0) {
        const binary = []; 
        while (numero > 0) {
            const module = numero % 2; 
            binary.unshift(module);
            numero = Math.floor(numero / 2);
        }
        return binary.join('');
    }
    else{
        return numero.toString(16).toUpperCase()
    }
}

function vickyD(){
    return{
        nombre: 'Victoria',
        edad:28,
        nacionalidad: 'argentina'
    }
}