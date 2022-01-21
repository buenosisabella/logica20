let idade = 18

if (idade >= 18){
    console.log( "parabéns paraiba você atingiu aos 18 anos de idade ")
}

 
let humano = true

if(idade && humano ){
    console.log( "parabens humano vc e maior de idade " )
}

let mes = "setembro"

if( mes === "dezembro" || mes === "janeiro "){
    console.log( " parabens voce faz aniversario rm janeiro ou em dezembro ")
}else{
    console.log(`parabens voce faz anivesario em ${mes}`)
}

let nome = "Isa"


if( nome.substring(0,1) === "R"){
    console.log("o seu nome começa com a letra R")
}else {
    console.log(` o seu nome começa com a letra ${nome} `)
}

let name = "Isa"
let sobrenome = "Bueno"

if( sobrenome.length > 6 || name.substring(0,1) === "E"){
    console.log( "parabens o seu nome tem mais de 6 letra e começa com a letra E")

}else {
    console.log ( "que pena o seu nome nao tem mais de 6  letra e nao começa com a letra E")
}