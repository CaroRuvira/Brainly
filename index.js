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

const agvstin = () => {
    return {
        name: 'Agustin',
        nacionality: 'Argentinian',
        age: 22
    }
}

function caroRuvira(){
    const caro = {
        name: "Carolina",
        age: 35,
        nationality: "Argentina"
    }

    return caro;
}

function alexis() {
    return {
      nombre: "Alexis",
      edad: 23,
      nacionalidad: "Argentino",
    };
}
  
