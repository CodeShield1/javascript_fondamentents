let livres =[
    {titre:"rich dad poor dad",  auteur:"robert kiyosaki" ,prix:100  }, 
    {titre:"les 48 lois du pouvoir",  auteur:"robert green" ,prix:500 },
    {titre:"le code da vinci",  auteur:"dan brown" ,prix:100 },
    {titre:"le roi et le chien",  auteur:"william shakespeare" ,prix:200 },
    {titre:"le roi et le chien",  auteur:"william shakespeare" ,prix:170 }
                     
]


console.log(" Liste complète des livres :");
console.log(livres);



livres.forEach(function(livre){
 console.log("titre des livres :"+livre.titre);
});



total=0;
for(let i=0;i<livres.length;i++){
    total+=livres[i].prix;
}
console.log("total des prix des livres :"+total);



let count_livres=0;
for(let i=0;i<livres.length;i++){
    if(livres[i].prix>100){
        count_livres++;   
    }
}
console.log("nombre des livres qui ont un prix superieur a 100 DH :"+count_livres);

