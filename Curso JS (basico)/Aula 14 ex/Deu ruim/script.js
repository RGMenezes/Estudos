function Confirmar(){

    var res = document.getElementById("res")

    var numc = document.querySelector('input#numc')
    var nuc = Number(numc.value)
    var tnuc = String(numc.value)

    var numf = document.querySelector('input#numf')
    var nuf = Number(numf.value)
    var tnuf = String(numf.value)

    var nump = document.querySelector('input#nump')
    var nup = Number(nump.value)

    if (nuc != 0 && nuf != 0){
        if (nup = 0){
            res.innerHTML=`consideramos pular como 1`
            var c = nuc
            var f = nuf
            while (c <= f){
                res.innerHTML+=`${c} 👉`
                var c = c + 1
            }
            res.innerHTML+=`🏁`

        }else{
            var c = nuc
            var f = nuf
            var p = nup
            while (c <= f){
                res.innerHTML+=`${c} 👉`
                var c = c + p
            }
            res.innerHTML+=`🏁`

        }
    


    }else if (tnuc === '0' || tnuf === '0'){
        if (nuf != 0 && tnuc === '0'){
            if (nup = 0){
                res.innerHTML=`consideramos pular como 1`
                var c = nuc
                var f = nuf
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + 1
                }
                res.innerHTML+=`🏁`
    
            }else{
                var c = nuc
                var f = nuf
                var p = nup
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + p
                }
                res.innerHTML+=`🏁`
            }
         
        

        }else if(tnuf === '0' && nuc != 0){ 
            if (nup = 0){
                res.innerHTML=`consideramos pular como 1`
                var c = nuc
                var f = nuf
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + 1
                }
                res.innerHTML+=`🏁`
    
            }else{
                var c = nuc
                var f = nuf
                var p = nup
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + p
                }
                res.innerHTML+=`🏁`
    
            }  



        }else if (tnuc === '0' || tnuf === '0'){
            if (nup = 0){
                res.innerHTML=`consideramos pular como 1`
                var c = nuc
                var f = nuf
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + 1
                }
                res.innerHTML+=`🏁`
    
            }else{
                var c = nuc
                var f = nuf
                var p = nup
                while (c <= f){
                    res.innerHTML+=`${c} 👉`
                    var c = c + p
                }
                res.innerHTML+=`🏁`
    
            }        
            


        }else{
            alert("Por favor, nenhum dos espaços deve ficar em branco!😩")
        }
    
    }else{
            alert("Por favor, nenhum dos espaços deve ficar em branco!😩")
        }
}