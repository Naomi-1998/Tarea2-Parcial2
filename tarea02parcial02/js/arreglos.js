class Arreglos{
  
  mayor(){
    //'23;40;4;100' 
      let datos= document.getElementById("datos").value
     let numeros = datos.split(";") //["23","40","4","100"]
     let may=parseInt(numeros[0]) // 23
     //let dat = Json.parse(numeros[0]) // 23

      for(let i=1;i < numeros.length;i++){
        if (may < parseInt(numeros[i])){
          may = parseInt(numeros[i])//100
        } 
      }
      let resp = document.getElementById("resp")
      resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
  }
  menor(){
    let datos = document.getElementById("datos").value;
    let numeros = datos.split(";"); // ["23","40","4","100"]
    let menor = parseInt(numeros[0]); // Inicializar con el primer valor del arreglo
    let resp = document.getElementById("resp");

    for (let i = 1; i < numeros.length; i++) {
      if (menor > parseInt(numeros[i])) {
        menor = parseInt(numeros[i]);
      }
    }

    resp.textContent = `El menor del arreglo [${numeros}] es: ${menor}`;
  }
  sumaDivisores(){
    //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
    }
    let resp = document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
    
  }
  acuDivisores(num){
    let acu=0
    for(let c=1;c<num;c++){
      if (num%c==0){
          acu=acu+c
      }
    }
    return acu //1+3=4
}
  perfectos(){
    //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        if (acu==num){
           resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
        }
    }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
  }
  vuelto(numero){
    let billetes=[50,20,10,5,2,1] // invertimos el orden para empezar por los billetes grandes
    let  resultado=[]
    for(let i=0 ;i<billetes.length;i++){
        if(numero>=billetes[i]){
            let cantBilletes = Math.floor(numero/billetes[i]);
            resultado.push(`${cantBilletes} de $ ${billetes[i]}`); // agregamos un string con la cantidad de billetes y su valor
            numero=numero%billetes[i]; // actualizamos el valor de numero con el residuo
        }
    }
    return resultado;
}  
  dvuelto(){
    let datos=document.getElementById("datos");
    let numero=parseInt(datos.value);
    let arreglo=this.vuelto(numero);
    let resp = document.getElementById("resp")
    resp.textContent=`[ cantidad  ingresada =${numero}]  su vuelto es= ${arreglo.join(", ")} `;
  }
  eliminar(){
    let numerosString = document.getElementById("datos").value;
    let numeroAEliminar = parseInt(document.getElementById("numeroAEliminar").value);
    let numeros = numerosString.split(",").map(num => parseInt(num));
  
    let index = numeros.indexOf(numeroAEliminar);
    if (index !== -1) {
        numeros.splice(index, 1);
        let resp = document.getElementById("resp");
        resp.textContent = `Nuevo arreglo: [${numeros.join(", ")}]`;
    } else {
        alert("El número no se encontró en el arreglo.");
    }
  }
  
 
  base10_2() {
    let digito,numeros = [], base2 = "",aux
    let num = parseInt(document.getElementById("datos").value)
    aux=num
    while (num > 0) {
      digito = num % 2
      num = Math.floor(num / 2)
      numeros.push(digito)
    }
    for (let ind = numeros.length - 1; ind >= 0; ind--) {
      base2 = base2 + numeros[ind]
    }
    console.table({aux,base2})
    let resp = document.getElementById("resp")
    resp.textContent = `Base10[${aux}] es= ${base2} Base2`
  }
  base2_10(){
    
    let num = document.getElementById("datos").value;
    let base10 = 0;
    let aux = 1;
    for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i]);
        if (digit !== 0 && digit !== 1) {
            alert("Ingresa un número binario válido (solo 0 y 1).");
            return;
        }

        if (digit === 1) {
            base10 = base10 + aux;
        }

        aux = aux * 2;
    }

    
    console.log(`Base2[${num}] es = ${base10} Base10`);

    
    let resp = document.getElementById("resp");
    resp.textContent = `Base2[${num}] es = ${base10} Base10`;
}

  buscarArreglo() {
    let datos = document.getElementById("datos").value
    let arreglo = datos.split(";")
    let buscado = document.getElementById("buscado").value
    let c = 0, enc = false
    while (c < arreglo.length && enc == false) {
      if (arreglo[c] == buscado){
        enc = true
      }
      else {
        c = c + 1
      }
    }
    let resp = document.getElementById("resp")
    if (enc == true) {
      //console.log(buscado, "se encuentra en la pos: ",c)
      resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
    } else {
      //console.log(buscado," no se encuentra")
      resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
    }
  }
  
  insertar(){
    let numeros = document.getElementById("datos").value.split(",").map(num => parseInt(num));
    let numeroAInsertar = parseInt(document.getElementById("numeroAInsertar").value);
    let posicion = parseInt(document.getElementById("posicion").value);
    let aux = [];
  
    if (posicion >= 0 && posicion <= numeros.length) {
        for (let i = 0; i < posicion; i++) {
            aux.push(numeros[i]);
        }
        aux.push(numeroAInsertar);
  
        for (let i = posicion; i < numeros.length; i++) {
            aux.push(numeros[i]);
        }
  
        numeros = aux;
        let resp = document.getElementById("resp");
        resp.textContent = `Nuevo arreglo: [${numeros.join(", ")}]`;
    } else {
        alert("La posición no es válida.");
    }
  }
  primos(){
    let arr1 = document.getElementById("text1").value;
    let respuesta = document.getElementById("resp");
    let arr = arr1.split(";").map(Number);
    let canPrimos = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let numero = arr[i];
      if (numero > 1) {
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(numero); j++) {
          if (numero % j === 0) {
            esPrimo = false;
            break;
          }
        }
        if (esPrimo) {
          canPrimos++;
        }
      }
    }
  
    respuesta.textContent = `La cantidad de números primos es: ${canPrimos}`;
  }
  numero_repetido(){
    let arreglo = document.getElementById("text1").value;
    let numero = parseInt(document.getElementById("text2").value);
    let arr = arreglo.split(";").map(Number);
  
    let repeticiones = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === numero) {
        repeticiones++;
      }
    }
  
    const resp = document.getElementById("resp");
    resp.textContent = `El número ${numero} se repite ${repeticiones} veces en el arreglo.`;
  }
  promedio(){
    let datos = document.getElementById("datos").value;
    let numeros = datos.split(";").map(Number); // Convertir los valores a números
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    let resp = document.getElementById("resp");
    resp.textContent = `El promedio de los elementos es: ${promedio.toFixed(2)}`;
  }
  nombre_alreves(){
    let nombres = document.getElementById("datos").value;
    const nombresSeparados = nombres.split(",").map(nombre => nombre.trim());
    const nombresAlReves = nombresSeparados.map(nombre => nombre.split("").reverse().join(""));
    
    let resp = document.getElementById("resp");
    resp.textContent = `Los nombres al revés son: ${nombresAlReves.join(", ")}`;
  }
  calcularPromedio() {
    let empleados = [];
    let nombre = document.getElementById("nombreEmpleado").value;
    let valorHora = parseInt(document.getElementById("valorHora").value);
    let numeroHoras = parseInt(document.getElementById("numeroHoras").value);

    if (nombre && !isNaN(valorHora) && !isNaN(numeroHoras)) {
      empleados.push({ nombre: nombre, vh: valorHora, nh: numeroHoras });
      document.getElementById("nombreEmpleado").value = "";
      document.getElementById("valorHora").value = "";
      document.getElementById("numeroHoras").value = "";
    }

    if (empleados.length === 0) {
      document.getElementById("resp").textContent = "Agrega al menos un empleado.";
    } else {
      let totalSueldos = 0;
      for (let i = 0; i < empleados.length; i++) {
        totalSueldos += empleados[i].vh * empleados[i].nh;
      }

      let promedioSueldos = totalSueldos / empleados.length;
      document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);
    }
  }
  adivina_elnumero(){
    let numerosAdivinar = [5, 12, 18, 25, 30]; 
    
    
        let numeroIngresado = parseInt(document.getElementById("adivinar").value);
    
        if (!isNaN(numeroIngresado)) {
            if (numerosAdivinar.includes(numeroIngresado)) {
                let resp = document.getElementById("resp");
                resp.textContent = `¡Adivinaste el número ${numeroIngresado}! ¡Correcto!`;
            } else {
                let resp = document.getElementById("resp");
                resp.textContent = `El número ${numeroIngresado} no es correcto. Intenta nuevamente.`;
            }
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}

const arr = new Arreglos()
arr.sumaDivisores()
