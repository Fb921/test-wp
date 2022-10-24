// const maPromesse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('toto');
//     }, 300);
//   });


// function gestionnaireSuccesA(s){
//     console.log(s);
// }
// function gestionnaireEchecA(s){
//     console.log(s);
//     console.log(s);
// }

//   maPromesse
//   .then(gestionnaireSuccesA, gestionnaireEchecA);


function f(s){let t =s; console.log("Nous sommes dans la fonction f");return "C'est bon"}

// function loadScript(){
//     return new Promise((resolve,reject) => {
//         var i = 0;
//         while(i<100){
//             console.log(i);
//             i++;
//         }
//         if(i == 100){
//             resolve("Tous s'est bien passé !");
//         }else{
//             reject("Quelque chose s'est mal passé !");
//         } 
//     });
// }

// const promesse1 = loadScript();

// /*Décommentez le code pour qu'il s'exécute*/
// var e = promesse1.then(f,f);

// console.log(promesse1);
// console.log(e);

// console.log("Cette ligne va me permettre de savoir lequel s'execute en premier !");
// console.log("Cette ligne va me permettre de savoir lequel s'execute en premier !");
// console.log("Cette ligne va me permettre de savoir lequel s'execute en premier !");
// console.log("Cette ligne va me permettre de savoir lequel s'execute en premier !");
// console.log("Cette ligne va me permettre de savoir lequel s'execute en premier !");

// var p = 5;

// for(let o = 0;o<p;o++){
//     console.log(o); 
// }

// Promise.reject(new Error("Bonjour ici le paramètre de la fonction")).then(resolu,nonResolu)

// var xhttp = new XMLHttpRequest();
// xhttp.open("POST", "ajax_info.txt");
// xhttp.send();


// function myDisplayer(some) {
//     document.getElementById("some").innerHTML = some;
//   }
// function myDisplayer2(some) {
//     document.getElementById("some").innerHTML = some + some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 2;
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(myDisplayer2
// );

var l;

async function asyncFun(){
    let p = new Promise((result) => { var x=0; if(x==0){result("Bonjour")}});
    console.log("La valeur de p :");
    console.log(p);
    l = 0;
    // await p;
    console.log("La valeur de l :");
    console.log(l);
    console.log(p);
}

asyncFun();

console.log("Hey salut moi !");