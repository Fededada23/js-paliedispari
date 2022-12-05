let scegli = prompt('scegli pari o dispari');
let n = parseInt(prompt('inseirisci un numero che va da 1 a 5'));
let rand =getRandomNum(1, 5);
let risultatoSomma = somma(n,rand);
pariDispari(risultatoSomma,scegli);

console.log(n)

function getRandomNum(min,max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand)

function somma(n, rand)
{
    return n + rand;
}
console.log(risultatoSomma)

function pariDispari(risultatoSomma,scegli)
{
    if(risultatoSomma % 2 == 0 && scegli == "pari"){
        alert('hai vinto')
       
    }

    else if (risultatoSomma % 2 != 0 && scegli == "dispari"){
        alert('hai vinto')
       
    }
    else{
        alert('hai perso')
    }
}
