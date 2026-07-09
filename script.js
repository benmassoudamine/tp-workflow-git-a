const note=document.getElementById("note");
const resultat=document.getElementById("resultat");

note.addEventListener("input",()=>{

let montant=parseFloat(note.value);

if(isNaN(montant)){
resultat.innerHTML="";
return;
}

let pourboire=montant*0.20;

resultat.innerHTML="Pourboire : "+pourboire.toFixed(2)+" DH";

});