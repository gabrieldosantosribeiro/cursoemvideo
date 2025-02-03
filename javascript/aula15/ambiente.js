let num = [5, 8, 2, 9, 3] // array

num.push(1) // adiciona 1 no final do array
num.sort() // coloca o array num em ordem

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // acha a posição do elemento 8 no array (caso não encontrar retorna -1)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

