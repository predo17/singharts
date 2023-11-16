const escola = [{
    nome:"maria",
    endereco: 'rua kenndy n4',
    notaFinal: 10,
    sala: 5,
    turno:'manha',

},
{
    nome: "arthur",
    endereco: 'rua das margaridas',
    notaFinal: 6,
    sala: 2,
    turno:'noite',
},
{
    nome: "pedro",
    endereco: 'rua legal',
    notaFinal: 9,
    sala: 1,
    turno:'tarde',
}]

function inforAluno (a){
 console.log(` O aluno ${escola[a].nome}, estuda na sala ${escola[a].sala}, mora no ${escola[a].endereco}, e teve nota final de:${escola[a].notaFinal}  `)}
    inforAluno(0)
    inforAluno(1)
    inforAluno(2)
    