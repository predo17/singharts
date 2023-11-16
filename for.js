const escola = [{
    nome: "Lidia",
    endereco: 'Paque poti',
    notaFinal: 6.2,
    sala: 5,
    turno:'manha',
   
    
},

{
    nome: "julia",
    endereco: 'rua das margaridas',
    notaFinal: 6,
    sala: 2,
    turno:'noite',
},
{
    nome: "Iudson",
    endereco: 'rua legal',
    notaFinal: 9,
    sala: 1,
    turno:'tarde',
}]
for (let i =0; i<escola.length ; i++){
    console.log(escola[i].turno)
}