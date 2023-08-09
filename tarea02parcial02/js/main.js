class Numeros{
    vuelto(){
    }
    // limpiar(){
    //     document.getElementById("num").value=""
    //     document.getElementById("multi").value=""
    // }
    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }

    }
    divisores(){
        let c=1
        let num = document.getElementById("num").value
        let num2 = document.getElementById("num2").value
        let resp = document.getElementById("resp")
        console.log(num)
        console.log(resp)
        let divisores = ""
        num = parseInt(num)
        num2 = parseInt(num2)
        let acu1=0,acu2=0
        while (c < num){
                if (num % c == 0) {
                    console.log(c)
                    divisores = divisores + " " +c.toString()
                    acu1 = acu1 +c
                   
                }
                c = c+1
        }
        console.log(divisores) 
        
    }
    sumaDivisores(){}
  
 
}
const numero = new Numeros();
numero.divisores()

