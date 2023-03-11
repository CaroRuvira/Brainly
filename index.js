function laCajaDePandora(numero){
    if (numero % 2 === 0){
        var binario = [];
        while (numero !== 0){
            const module = num %2
           binario.unshift(module)
           num = Math.floor(num/2)

           return binario.join('')
    }
    }else { 
       
            return num.toString(16).toUpperCase()
        

    }
}