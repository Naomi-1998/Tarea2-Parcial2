class Cadena{
    cadena(){
        let nombre = "ana",car
        nombre ="Daniel"+"a"
        //       012345 6
        car = nombre[nombre.length-1]
        //console.table({nombre,car})
        //nombre[1]='A' // no se puede cambiar el caracter en una posicion
        //console.log(nombre[0])
        // for(let i=0;i < nombre.length;i++){
        //     console.log(nombre[i])
        // }
        let lim =nombre.length-1
        for(let i=lim;i >= 0;i--){
            console.log(nombre[i])
        }
    }
    vocales(){
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
    }
    caracterespecial(){
        let $input = document.getElementById("datos");
        let cadena = $input.value;
        let contpunto=0,contcoma=0,cont2=0,contpc=0
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]=="."){
                contpunto+=1
            }
            if(cadena[i]==","){
                contcoma+=1
            }
            if(cadena[i]==":"){
                cont2+=1
            }
            if(cadena[i]==";"){
                contpc+=1
            }
        }
        let resp = document.getElementById("resp")
        resp.textContent = `La cadena ${cadena} tiene ${contpunto} ".", ${contcoma} ",", ${cont2} ":", ${contpc} ";"`
    }
    quitaEspacio(conespacio) {
        let sinEspacio="";
        conespacio = conespacio.trim();
        for (let i = 0; i < conespacio.length; i++) {
        if (conespacio[i] !== " ") {
            sinEspacio += conespacio[i];
        }
        }
        return sinEspacio;
    }
    insertar() {
        // "hola que tal"
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            // for (let i = 0; i < subcadena.length; i++) {
            //     aux = aux + subcadena[i]
            // }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
            cadena=aux
            let resp = document.getElementById("resp")
            resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }
    buscar_caracter(){

        let cadena = document.getElementById("cadena").value;
        let caracter = document.getElementById("caracter").value;
    
        let aux = cadena.indexOf(caracter);
        if (aux !== -1) {
            let posicion = aux + 1;    
        
        let resp = document.getElementById("resp")
            resp.textContent = `El carácter "${caracter}" se encontró en la posición ${posicion} de la cadena.`
        } 
    }
    concatenar_frase(){

        let cadena = document.getElementById("cadena").value;
        let frase = document.getElementById("frase").value;
    
        let resultado = cadena + " " + frase;
        let resp = document.getElementById("resp");
        resp.textContent = `La cadena concatenada es: ${resultado}`;
    }
    fraseIgual(){
        let frase = document.getElementById("datos").value;

        
        let fraseSinEspacios = frase.replace(/\s/g, '').toLowerCase();

        
        let esPalindromo = true;
        for (let i = 0; i < fraseSinEspacios.length / 2; i++) {
        if (fraseSinEspacios.charAt(i) !== fraseSinEspacios.charAt(fraseSinEspacios.length - 1 - i)) {
            esPalindromo = false;
            break;
        }
        }

        if (esPalindromo) {
        document.getElementById("resp").textContent = "La frase si se lee igual";
        } else {
        document.getElementById("resp").textContent = "La frase no se lee igual.";
        }
    }
    sumardigitoscadenas(){
        let datos= document.getElementById("datos");
        let inputCadena=(datos.value)
        let numero = "";
        let suma = 0;
      
        for (let i = 0; i < inputCadena.length; i++) {
          if (inputCadena[i] === ";") {
            suma += parseFloat(numero);
            numero = "";
        } else {
            numero += inputCadena[i];
        }
        }

        // Sumar el último número después del último coma (o el único número si no hay comas)
        suma += parseFloat(numero);
        let resp = document.getElementById("resp")
        resp.textContent= ` Cadena ingresada = "${inputCadena}" la suma sus dijitos es = [${suma}]`;
    }
    frase_invertida(){
        let str  = document.getElementById("datos").value
        let arrayFromStr = str.split(" ");
        let result = [];
        
        for (let word of arrayFromStr) {
        result.push(word.split("").reverse().join(""));
        }
        
        resp.textContent=(result.join(" "));
    }
    convertir_frase(){
        let $input = document.getElementById("datos");
        let cadena = ($input.value);
        let caracter = ";";
        let arreglo = [];
        
        let numero = "";
        for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
        arreglo.push((numero));
        numero = "";
        } else {
        numero += cadena[i];
        }
        }
        
        arreglo.push((numero));
        let resp = document.getElementById("resp")
        resp.textContent= ` cantidad  ingresada = "${cadena}" su numero en arreglo es = [${arreglo}]`;
    }
    eliminar_subcadena(){
    
        let cadena = document.getElementById("cadena").value;
        let subcadena = document.getElementById("subcadena").value;
    
        let nuevaCadena = cadena.replace(subcadena, "");
        
        let resp = document.getElementById("resp");
        resp.textContent = `La cadena resultante es: ${nuevaCadena}`;
    }
    palabras_frase() {
        
            let texto = document.getElementById("text1").value;
            let resp = document.getElementById("resp");
            let contadorSubcadenas = 0;
        
            for (let i = 0; i < texto.length; i++) {
                if (texto[i] !== " ") {
                    contadorSubcadenas++;
                    while (i < texto.length && texto[i] !== " ") {
                        i++;
                    }
                }
            }
        
            resp.innerHTML = "Número de palabras en la frase: " + contadorSubcadenas;  

    }
}
let cad = new Cadena()

